import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

export const UserDropdown: React.FC = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            size="icon"
            type="button"
            className="flex text-sm bg-transparent rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isUserDropdownOpen}
            onClick={handleUserDropdownToggle}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="user photo"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white   rounded-lg shadow-lg dark:bg-gray-700"
        >
          <div
            className="mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Prashant Manandhar
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                prashantmanandhar2002@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
