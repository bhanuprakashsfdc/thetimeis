
import React, { useState, useEffect, useCallback } from 'react';
import { Clock, Play, Pause, RefreshCw, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

interface PomodoroTimerProps {
  minimal?: boolean;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ minimal = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const { toast } = useToast();
  
  // Timer durations in seconds
  const durations = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  // Reset timer when mode changes
  useEffect(() => {
    setTime(durations[mode]);
    setIsActive(false);
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
  }, [mode]);

  const switchMode = useCallback((newMode: TimerMode) => {
    if (mode !== newMode) {
      setMode(newMode);
    }
  }, [mode]);

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
    <div className="bg-card rounded-lg shadow-md p-4 border border-border/50">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Pomodoro Timer</h2>
      </div>
      
      <div className="flex justify-center space-x-2 mb-4">
        <Button 
          variant={mode === 'pomodoro' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('pomodoro')}
        >
          Focus
        </Button>
        <Button 
          variant={mode === 'shortBreak' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('shortBreak')}
        >
          Short Break
        </Button>
        <Button 
          variant={mode === 'longBreak' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => switchMode('longBreak')}
        >
          Long Break
        </Button>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="text-4xl font-mono font-bold">{formatTime(time)}</div>
      </div>
      
      <div className="flex justify-center space-x-3">
        <Button onClick={toggleTimer}>
          {isActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button variant="outline" onClick={resetTimer}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
