
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, Play, Pause, RefreshCw, Settings, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/constants/utils';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface PomodoroTimerProps {
  minimal?: boolean;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ minimal = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Timer durations in seconds
  const durations = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
    if (audioRef.current) {
      audioRef.current.loop = true;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Play/pause ticking sound based on timer state
  useEffect(() => {
    if (audioRef.current) {
      if (isActive && soundEnabled) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isActive, soundEnabled]);

  // Reset timer when mode changes
  useEffect(() => {
    setTime(durations[mode]);
    setIsActive(false);
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [mode]);

  // Timer logic
  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive && time > 0) {
      interval = window.setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Timer completed
      const message = mode === 'pomodoro' ? 'Time for a break!' : 'Break over! Back to work!';
      toast({
        title: 'Timer Complete',
        description: message,
        duration: 5000
      });
      
      // Auto-switch modes
      if (mode === 'pomodoro') {
        setMode('shortBreak');
      } else {
        setMode('pomodoro');
      }
    }
    
    return () => clearInterval(interval);
  }, [isActive, time, mode, toast]);

  const toggleTimer = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setTime(durations[mode]);
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [mode]);

  const switchMode = useCallback((newMode: TimerMode) => {
    if (mode !== newMode) {
      setMode(newMode);
    }
  }, [mode]);

  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (minimal) {
    return (
      <div className="flex items-center gap-2 text-primary-foreground">
        <Clock className="h-4 w-4" />
        <span className="font-mono text-sm">{formatTime(time)}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 text-primary-foreground" 
          onClick={toggleTimer}
        >
          {isActive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-md p-6 border border-border/50">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Pomodoro Timer</h2>
      </div>
      
      <div className="flex justify-center space-x-3 mb-6">
        <Button 
          variant={mode === 'pomodoro' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('pomodoro')}
          className="px-4"
        >
          Focus
        </Button>
        <Button 
          variant={mode === 'shortBreak' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('shortBreak')}
          className="px-4"
        >
          Short Break
        </Button>
        <Button 
          variant={mode === 'longBreak' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('longBreak')}
          className="px-4"
        >
          Long Break
        </Button>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="text-7xl font-mono font-bold">{formatTime(time)}</div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button 
          size="lg"
          onClick={toggleTimer}
          className="text-lg px-6 py-6"
        >
          {isActive ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={resetTimer}
          className="text-lg px-6 py-6"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Reset
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSound}
          className="h-14 w-14"
        >
          {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
