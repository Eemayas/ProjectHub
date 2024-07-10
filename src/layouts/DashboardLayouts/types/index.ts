import React from "react";

export interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  badgeText?: string;
}
