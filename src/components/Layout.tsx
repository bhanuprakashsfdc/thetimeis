
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sun, Moon, Menu, X, Timer, Home, Wrench, Info, BookOpen, MessageSquare, Calendar1, LoaderPinwheel, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { APP_NAME } from '@/constants/constants';
import SearchDialog from './SearchDialog';
import CountdownTimer from './CountdownTimer';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mainMenuItems } from '@/constants/mainMenuItems';
import { toolsItems } from '@/constants/toolsItems';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
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
  
  const openSearchDialog = () => {
    setSearchDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6" />
            <Link to="/" className="text-xl font-bold tracking-tight">{APP_NAME}</Link>
          </div>
          
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
            
            <CountdownTimer compact={true} className="mr-2" />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={openSearchDialog}
              className="text-primary-foreground"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="text-primary-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <CountdownTimer compact={true} className="mr-2" />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={openSearchDialog}
              className="text-primary-foreground mr-2"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="text-primary-foreground mr-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-primary-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

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
          </nav>
        </div>
      )}

      <SearchDialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen} />

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
              <h3 className="text-lg font-semibold mb-4">Quick Countdown</h3>

              <p className="text-secondary-foreground mb-2 mt-4">Have questions or feedback?</p>
              <Link 
                to="/contact.html" 
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
