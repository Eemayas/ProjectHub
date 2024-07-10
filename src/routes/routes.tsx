import Dashboard from "@/pages/Dashboard";
import LogIn from "@/pages/LogIn/LogIn";
import SignUp from "@/pages/LogIn/Signup";
import ProjectDashboard from "@/pages/project/Dashboard";
import path from "path";
import { useRoutes } from "react-router-dom";
// import LogIn from "./LogIn";
// import Dashboard from "./Dashboard";
// import ToDoPage from "./projectPage/ToDoPage";
// import ProjectPage from "./projectPage/ProjectPage";
// import DeadlineList from "./projectPage/DeadlineList";
// import ProfilePage from "./profilePage/ProfilePage";
// import ResourcesPage from "./projectPage/ResourcesPage";
// import ChatPage from "./projectPage/ChatPage";
// import ProgressPage from "./projectPage/ProgressPage"; // Assuming you meant ProgressPage instead of ChatPage again

export default function Router() {
  return useRoutes([
    { path: "/login", element: <LogIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/dashboard", element: <Dashboard /> },
    {
      path: "/project",
      children: [{ path: ":id", element: <ProjectDashboard /> }],
    },
    // {
    //   path: "/projectPage",
    //   children: [
    //     { path: "todo", element: <ToDoPage /> },
    //     { path: "", element: <ProjectPage /> },
    //     { path: "deadline", element: <DeadlineList /> },
    //     { path: "resources", element: <ResourcesPage /> },
    //     { path: "chat", element: <ChatPage /> },
    //     { path: "progress", element: <ProgressPage /> }, // Ensure this is the correct component
    //   ],
    // },
    // { path: "/profilepage", element: <ProfilePage /> },
  ]);
}
