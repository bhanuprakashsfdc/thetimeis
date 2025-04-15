// src/data/mainMenuItems.tsx

import { Home, Wrench, Info, BookOpen, MessageSquare } from 'lucide-react';

export const mainMenuItems = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "Tools", path: "#", icon: <Wrench className="h-4 w-4 mr-2" />, hasSubmenu: true },
  { name: "About", path: "/about.html", icon: <Info className="h-4 w-4 mr-2" /> },
  { name: "Blog", path: "/blog.html", icon: <BookOpen className="h-4 w-4 mr-2" /> },
  { name: "Contact", path: "/contact.html", icon: <MessageSquare className="h-4 w-4 mr-2" /> }
];
