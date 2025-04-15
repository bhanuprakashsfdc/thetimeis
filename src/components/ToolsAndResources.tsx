import React from 'react';
import { Link } from 'react-router-dom';
import { toolsItems } from '@/constants/toolsItems';

const ToolsAndResources: React.FC = () => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border/50">
      <h3 className="text-xl font-semibold mb-4">Tools & Resources</h3>
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
  );
};

export default ToolsAndResources;
