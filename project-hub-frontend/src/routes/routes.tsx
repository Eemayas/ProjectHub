import Dashboard from "@/pages/Dashboard";
import LogIn from "@/pages/LogIn/LogIn";
import SignUp from "@/pages/LogIn/Signup";
import ProjectDashboard from "@/pages/project/Dashboard";
import ProjectMemberList from "@/pages/project/MemberList/ProjectMemberList";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    { path: "/login", element: <LogIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/", element: <Dashboard /> },
    {
      path: "/project",
      children: [
        { path: ":id", element: <ProjectDashboard /> },
        { path: ":id/members", element: <ProjectMemberList /> },
      ],
    },
  ]);
}
