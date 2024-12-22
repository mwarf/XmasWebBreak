import React from "react";
import * as LucideIcons from 'lucide-react'; // Import all icons from lucide-react

function SocialIcon({ href, icon, name }) {
  const LucideIcon = LucideIcons[icon]; // Dynamically get the icon component

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
       {/* Use the dynamically retrieved icon component */}
      {LucideIcon && <LucideIcon className="h-6 w-6" />}
      <span className="sr-only">{name}</span>
    </a>
  );
}

export default SocialIcon;