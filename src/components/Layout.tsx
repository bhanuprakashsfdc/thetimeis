
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sun, Moon, Menu, X, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PomodoroTimer from './PomodoroTimer';
import { APP_NAME } from '@/lib/constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    // Check for user preference
    const isDark = localStorage.getItem('dark-mode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    }
    setDarkMode(!darkMode);
    toast({
      title: darkMode ? "Light mode activated" : "Dark mode activated",
      duration: 1500,
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "World Clock", path: "/world-clock.html" },
    { name: "Time Zone", path: "/timezone.html" },
    { name: "Pomodoro", path: "/pomodoro.html" },
    { name: "Calendar", path: "/calendar.html" },
    { name: "About", path: "/about.html" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6" />
            <Link to="/" className="text-xl font-bold tracking-tight">{APP_NAME}</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="hover:text-secondary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Pomodoro Timer in Header */}
            <div className="border-l border-primary-foreground/30 pl-4 ml-2">
              <PomodoroTimer minimal />
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="text-primary-foreground"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="text-primary-foreground mr-2"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-primary-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto py-4 flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="hover:text-primary transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Pomodoro Link */}
            <div className="pt-2 border-t border-border">
              <Link 
                to="/pomodoro.html" 
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Timer className="h-4 w-4" />
                <span>Pomodoro Timer</span>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-secondary py-6 mt-auto">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-foreground">
                &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/terms.html" className="text-secondary-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy.html" className="text-secondary-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
