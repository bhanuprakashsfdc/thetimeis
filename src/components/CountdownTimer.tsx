
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Timer, 
  Play, 
  Pause, 
  RotateCcw, 
  Save, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface CountdownTimerProps {
  initialTime?: number; // in seconds
  title?: string;
  compact?: boolean;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime = 60,
  title = "Countdown Timer",
  compact = false,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [inputTime, setInputTime] = useState<string>("");
  const [savedTimers, setSavedTimers] = useState<{ name: string; time: number }[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Load saved timers from localStorage on component mount
  useEffect(() => {
    const storedTimers = localStorage.getItem('countdown-timers');
    if (storedTimers) {
      setSavedTimers(JSON.parse(storedTimers));
    }
  }, []);

  // Format time as MM:SS or HH:MM:SS
  const formatTime = useCallback((seconds: number): string => {
    if (seconds < 0) seconds = 0;
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, []);

  // Set document title when timer is running
  useEffect(() => {
    if (isRunning) {
      document.title = `${formatTime(timeLeft)} - Countdown`;
    } else {
      document.title = 'TheTimeIs.net - Precise Time, Anywhere';
    }

    return () => {
      document.title = 'TheTimeIs.net - Precise Time, Anywhere';
    };
  }, [timeLeft, isRunning, formatTime]);

  // Timer logic
  useEffect(() => {
    let timerId: number;
    
    if (isRunning && timeLeft > 0) {
      timerId = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      toast({
        title: "Time's up!",
        description: "Your countdown timer has finished.",
      });
    }
    
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, timeLeft, toast]);

  // Parse input time (supports formats like "5m", "1h30m", "90s", etc.)
  const parseTimeInput = (input: string): number => {
    // Check if the input is just a plain number (seconds)
    if (/^\d+$/.test(input)) {
      return parseInt(input, 10);
    }
    
    let totalSeconds = 0;
    
    // Match hours pattern (e.g., "2h")
    const hoursMatch = input.match(/(\d+)h/);
    if (hoursMatch) {
      totalSeconds += parseInt(hoursMatch[1], 10) * 3600;
    }
    
    // Match minutes pattern (e.g., "30m")
    const minutesMatch = input.match(/(\d+)m/);
    if (minutesMatch) {
      totalSeconds += parseInt(minutesMatch[1], 10) * 60;
    }
    
    // Match seconds pattern (e.g., "45s")
    const secondsMatch = input.match(/(\d+)s/);
    if (secondsMatch) {
      totalSeconds += parseInt(secondsMatch[1], 10);
    }
    
    return totalSeconds;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleSetTime = () => {
    const parsedTime = parseTimeInput(inputTime);
    if (parsedTime > 0) {
      setTimeLeft(parsedTime);
      setInputTime("");
      setIsRunning(false);
      toast({
        title: "Timer set",
        description: `Timer set to ${formatTime(parsedTime)}.`,
      });
    } else {
      toast({
        title: "Invalid time format",
        description: "Try formats like '5m', '1h30m', '90s', or just seconds.",
        variant: "destructive",
      });
    }
  };

  const handleSaveTimer = () => {
    if (timeLeft > 0) {
      const timerName = `Timer ${savedTimers.length + 1}`;
      const newTimers = [...savedTimers, { name: timerName, time: timeLeft }];
      setSavedTimers(newTimers);
      localStorage.setItem('countdown-timers', JSON.stringify(newTimers));
      
      toast({
        title: "Timer saved",
        description: `Saved current time (${formatTime(timeLeft)}).`,
      });
    }
  };

  const handleLoadTimer = (time: number) => {
    setTimeLeft(time);
    setIsRunning(false);
    toast({
      title: "Timer loaded",
      description: `Loaded timer with ${formatTime(time)}.`,
    });
  };

  const goToFullTimerPage = () => {
    navigate('/countdown-timer.html');
  };

  // Render compact version (for header/footer)
  if (compact) {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 px-2"
          onClick={goToFullTimerPage}
        >
          <Timer className="h-4 w-4" />
          <span className="font-mono">{formatTime(timeLeft)}</span>
        </Button>
      </div>
    );
  }

  // Render full version
  return (
    <div className={`p-4 rounded-lg bg-card ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Timer className="h-5 w-5 text-primary" />
          {title}
        </h3>
        {!isMobile && (
          <Button variant="ghost" size="sm" onClick={handleSaveTimer}>
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
        )}
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold font-mono mb-4">{formatTime(timeLeft)}</div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <Button 
            variant={isRunning ? "outline" : "default"} 
            size="sm"
            onClick={handleStartPause}
          >
            {isRunning ? <Pause className="mr-1" /> : <Play className="mr-1" />}
            {isRunning ? "Pause" : "Start"}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReset}
          >
            <RotateCcw className="mr-1" />
            Reset
          </Button>
          
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleSaveTimer}
            >
              <Save className="mr-1" />
              Save
            </Button>
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="e.g. 5m, 1h30m, 90s"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            className="font-mono"
          />
          <Button onClick={handleSetTime}>Set</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Format: 1h30m15s, 5m, 90s, etc.
        </p>
      </div>

      {savedTimers.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Saved Timers</h4>
          <div className="flex flex-wrap gap-2">
            {savedTimers.map((timer, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleLoadTimer(timer.time)}
              >
                <Clock className="h-3 w-3 mr-1" />
                {formatTime(timer.time)}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="mt-4 w-full justify-between" 
        onClick={goToFullTimerPage}
      >
        Full Timer Page
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CountdownTimer;
