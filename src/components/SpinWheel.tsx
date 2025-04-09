
import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface SpinWheelProps {
  minimal?: boolean;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ minimal = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [names, setNames] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  // Colors for the wheel
  const colors = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA', '#E5DEFF', '#8B5CF6'];

  const addName = (name: string) => {
    if (name.trim() !== '') {
      setNames([...names, name.trim()]);
      setInputValue('');
    }
  };

  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addName(inputValue);
    }
  };

  const removeName = (index: number) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };

  const spinWheel = () => {
    if (spinning) return;
    if (names.length < 2) {
      toast({
        title: "Not enough items",
        description: "Add at least 2 items to spin the wheel",
        variant: "destructive",
      });
      return;
    }

    setWinner(null);
    setSpinning(true);
    
    // Random number of full rotations (3-6) plus a random angle
    const spinAngle = 360 * Math.floor(3 + Math.random() * 4) + Math.random() * 360;
    const newRotation = rotation + spinAngle;
    setRotation(newRotation);
    
    setTimeout(() => {
      setSpinning(false);
      
      // Calculate winner based on final rotation
      const finalAngle = newRotation % 360;
      const segmentSize = 360 / names.length;
      const winningIndex = Math.floor((360 - finalAngle) / segmentSize) % names.length;
      setWinner(names[winningIndex]);
      
      toast({
        title: "We have a winner!",
        description: names[winningIndex],
      });
    }, 3000);
  };

  // Draw the wheel when names or canvas change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    
    const angleSize = (2 * Math.PI) / names.length;
    
    // Draw segments
    names.forEach((name, i) => {
      const startAngle = i * angleSize;
      const endAngle = (i + 1) * angleSize;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + angleSize / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '14px sans-serif';
      
      // Ensure text fits in segment
      const textRadius = radius * 0.75;
      const maxWidth = angleSize * textRadius * 0.8;
      let displayText = name;
      if (ctx.measureText(name).width > maxWidth) {
        displayText = name.substring(0, 8) + '...';
      }
      
      ctx.fillText(displayText, textRadius, 5);
      ctx.restore();
    });
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    
    // Draw pointer
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 5);
    ctx.lineTo(centerX - 10, centerY - radius + 10);
    ctx.lineTo(centerX + 10, centerY - radius + 10);
    ctx.closePath();
    ctx.fillStyle = '#D946EF';
    ctx.fill();
    
  }, [names]);

  // Apply rotation transform when spinning
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.style.transform = `rotate(${rotation}deg)`;
    canvas.style.transition = spinning ? 'transform 3s cubic-bezier(0.1, 0.25, 0.1, 1)' : 'none';
  }, [rotation, spinning]);

  if (minimal) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
          >
            <RotateCw className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Spin the Wheel</DialogTitle>
          </DialogHeader>
          <FullSpinWheel 
            names={names} 
            setNames={setNames} 
            canvasRef={canvasRef} 
            spinning={spinning} 
            spinWheel={spinWheel} 
            winner={winner} 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            handleKeyDown={handleKeyDown} 
            removeName={removeName}
            addName={addName}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <FullSpinWheel 
      names={names} 
      setNames={setNames} 
      canvasRef={canvasRef} 
      spinning={spinning} 
      spinWheel={spinWheel} 
      winner={winner} 
      inputValue={inputValue} 
      setInputValue={setInputValue} 
      handleKeyDown={handleKeyDown} 
      removeName={removeName}
      addName={addName}
    />
  );
};

interface FullSpinWheelProps {
  names: string[];
  setNames: React.Dispatch<React.SetStateAction<string[]>>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  spinning: boolean;
  spinWheel: () => void;
  winner: string | null;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  removeName: (index: number) => void;
  addName: (name: string) => void;
}

const FullSpinWheel: React.FC<FullSpinWheelProps> = ({ 
  names, 
  setNames, 
  canvasRef, 
  spinning, 
  spinWheel, 
  winner,
  inputValue,
  setInputValue,
  handleKeyDown,
  removeName,
  addName
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-4">
      <div className="relative">
        <div className="w-[300px] h-[300px] relative">
          <canvas
            ref={canvasRef}
            width={300}
            height={300}
            className="transition-transform"
          />
          <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
            {spinning && (
              <div className="text-lg font-bold animate-pulse-subtle">Spinning...</div>
            )}
          </div>
        </div>
        <Button
          onClick={spinWheel}
          disabled={spinning || names.length < 2}
          size="lg"
          className="mt-4 mx-auto block"
        >
          <RotateCw className="mr-2" />
          Spin the Wheel
        </Button>
        {winner && !spinning && (
          <div className="mt-4 text-center p-3 bg-primary/10 rounded-lg border border-primary/20 animate-fade-in">
            <div className="text-lg flex items-center justify-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>Winner:</span>
            </div>
            <div className="text-2xl font-bold text-primary mt-1">{winner}</div>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <label htmlFor="name-input" className="block text-sm font-medium mb-2">
            Add Item
          </label>
          <div className="flex gap-2">
            <input
              id="name-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Enter item name"
            />
            <Button type="button" onClick={() => addName(inputValue)}>
              Add
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Items on Wheel</h3>
          <div className="max-h-[200px] overflow-y-auto border rounded-md p-2">
            {names.length === 0 ? (
              <div className="text-sm text-muted-foreground p-2">No items added</div>
            ) : (
              <ul className="space-y-1">
                {names.map((name, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-2 rounded hover:bg-accent"
                  >
                    <span>{name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeName(index)}
                      className="h-6 w-6 p-0"
                    >
                      ×
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
