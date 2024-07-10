import React from "react";

export interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon,
  text,
}) => (
  <li>
    <a
      href={href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {icon}
      <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
    </a>
  </li>
);
