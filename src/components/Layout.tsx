
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sun, Moon, Menu, X, Timer, RotateCw, Home, Tool, Info, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PomodoroTimer from './PomodoroTimer';
import SpinWheel from './SpinWheel';
import { APP_NAME } from '@/lib/constants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
  
  // Main menu items
  const mainMenuItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Tools", path: "#", icon: <Tool className="h-4 w-4 mr-2" />, hasSubmenu: true },
    { name: "About", path: "/about.html", icon: <Info className="h-4 w-4 mr-2" /> },
    { name: "Blog", path: "#", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: "Contact", path: "#", icon: <MessageSquare className="h-4 w-4 mr-2" /> }
  ];
  
  // Tools submenu items
  const toolsItems = [
    { name: "World Clock", path: "/world-clock.html", icon: <Clock className="h-4 w-4" /> },
    { name: "Time Zone", path: "/timezone.html", icon: <Clock className="h-4 w-4" /> },
    { name: "Pomodoro", path: "/pomodoro.html", icon: <Timer className="h-4 w-4" /> },
    { name: "Calendar", path: "/calendar.html", icon: <Clock className="h-4 w-4" /> },
    { name: "Spin Wheel", path: "/spin-wheel.html", icon: <RotateCw className="h-4 w-4" /> }
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
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {mainMenuItems.map((item) => 
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="text-primary-foreground bg-transparent hover:bg-primary-foreground/20">
                        <span className="flex items-center">
                          {item.icon}
                          {item.name}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {toolsItems.map((tool) => (
                            <li key={tool.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={tool.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2">
                                    {tool.icon}
                                    <span className="text-sm font-medium leading-none">{tool.name}</span>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.path}
                        className="text-primary-foreground flex items-center px-4 py-2 hover:bg-primary-foreground/20 rounded-md transition-colors"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Spin Wheel in Header */}
            <div className="border-l border-primary-foreground/30 pl-4 ml-2">
              <div className="flex items-center gap-2">
                <SpinWheel minimal />
                <span className="text-sm">Spin</span>
              </div>
            </div>
            
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
            {mainMenuItems.map((item) => 
              item.hasSubmenu ? (
                <div key={item.name}>
                  <div className="flex items-center gap-2 font-medium mb-2">
                    {item.icon}
                    {item.name}
                  </div>
                  <div className="pl-6 space-y-2">
                    {toolsItems.map((tool) => (
                      <Link 
                        key={tool.name}
                        to={tool.path}
                        className="flex items-center gap-2 py-1 hover:text-primary transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {tool.icon}
                        <span>{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )
            )}
            
            {/* Mobile Spin Wheel Link */}
            <div className="pt-2 border-t border-border">
              <Link 
                to="#" 
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('mobile-spin-trigger')?.click();
                }}
              >
                <RotateCw className="h-4 w-4" />
                <span>Spin Wheel</span>
              </Link>
              <button id="mobile-spin-trigger" className="hidden">
                <SpinWheel minimal />
              </button>
            </div>
            
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About {APP_NAME}</h3>
              <p className="text-secondary-foreground mb-4">
                Accurate time synchronized with atomic clocks. The most reliable time service available.
              </p>
              <div className="flex space-x-4">
                <Link to="/terms.html" className="text-secondary-foreground hover:text-primary transition-colors">Terms</Link>
                <Link to="/privacy.html" className="text-secondary-foreground hover:text-primary transition-colors">Privacy</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Tools</h3>
              <ul className="space-y-2">
                {toolsItems.map((tool) => (
                  <li key={tool.name}>
                    <Link 
                      to={tool.path} 
                      className="flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors"
                    >
                      {tool.icon}
                      <span>{tool.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-secondary-foreground mb-2">Have questions or feedback?</p>
              <Link 
                to="#" 
                className="inline-flex items-center text-primary hover:underline"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>Get in touch</span>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground">
              &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
