import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { UserDropdown } from "./components/UserDropdown";
import { SidebarItem } from "./components/SidebarItem";
import { MdOutlineMessage, MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const DashboardLayouts = ({
  children,
  isSidebarRequired = false,
}: {
  children: React.ReactNode;
  isSidebarRequired?: boolean;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSidebarOpen(e.matches);
    };

    setIsSidebarOpen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-background border-b border-gray-20 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              {isSidebarRequired && (
                <button
                  onClick={toggleSidebar}
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <SidebarIcon />
                </button>
              )}
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  ProjectHub
                </span>
              </a>
            </div>
            <div className="flex items-center gap-5">
              <ModeToggle />
              <UserDropdown />
            </div>
          </div>
        </div>
      </nav>

      {isSidebarRequired && (
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <SidebarItem
                href="#"
                icon={<MdOutlineSpaceDashboard className="h-5 w-5" />}
                text="Dashboard"
              />
              <SidebarItem
                href="#"
                icon={<FaTasks className="h-5 w-5" />}
                text="Task"
              />
              <SidebarItem
                href="#"
                icon={<MdOutlineMessage className="h-5 w-5" />}
                text="Messages"
              />
              <SidebarItem
                href="#"
                icon={<IoIosPeople className="h-5 w-5" />}
                text="Members"
              />
            </ul>
          </div>
        </aside>
      )}
      <div className={`pt-16 ${isSidebarRequired ? "md:pl-64" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayouts;

function SidebarIcon({}) {
  return (
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  );
}
