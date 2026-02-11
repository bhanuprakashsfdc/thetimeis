import { Clock, Sun, Moon, Menu, X, Timer, Home, Wrench, Info, BookOpen, MessageSquare, Calendar1, LoaderPinwheel, Search } from 'lucide-react';

export const toolsItems = [
    { name: "World Clock", path: "/world-clock.html", icon: <Clock className="h-4 w-4" /> },
    { name: "Time Zone", path: "/timezone.html", icon: <Timer className="h-4 w-4" /> },
    { name: "Calendar", path: "/calendar.html", icon: <Calendar1 className="h-4 w-4" /> },
    { name: "Countdown Timer", path: "/countdown-timer.html", icon: <Timer className="h-4 w-4" /> },
    { name: "Spin Wheel", path: "/spin-wheel.html", icon: <LoaderPinwheel className="h-4 w-4" /> },
    { name: "Pomodoro Timer", path: "/pomodoro.html", icon: <Timer className="h-4 w-4" /> },
    { name: "World Map Time", path: "/world-time-map.html", icon: <Clock className="h-4 w-4" /> },
  ];