import { Button } from "@/components/ui/button";
import DashboardLayouts from "@/layouts/DashboardLayouts/DashboardLayouts";
import { BiAddToQueue } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Board from "./components/Board";
const ProjectDashboard = () => {
  const { id } = useParams();
  console.log({ projectID: id });
  const projectname = "Mobile App";
  const memberList = [
    { name: "Member 14", profileImg: "https://github.com/username14.png" },
    { name: "Member 15", profileImg: "https://github.com/username15.png" },
    { name: "Member 16", profileImg: "https://github.com/username16.png" },
    { name: "Member 17", profileImg: "https://github.com/username17.png" },
    { name: "Member 17", profileImg: "https://github.com/username17.png" },
    { name: "Member 17", profileImg: "https://github.com/username17.png" },
  ];
  return (
    <DashboardLayouts isSidebarRequired={true}>
      <div className="p-10 flex flex-col gap-10">
        <div className=" flex justify-between items-center">
          {" "}
          <div className="  font-semibold text-[46px] leading-[56px] capitalize text-[#0D062D]">
            {projectname}
          </div>
          <div className="flex gap-3">
            <Button className="gap-2">
              <BiAddToQueue className="h-4 w-4"></BiAddToQueue>
              Invite
            </Button>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {memberList.slice(0, 4).map((member, index) => (
                <img
                  key={`mwmber-${index}`}
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={member.profileImg}
                  alt={member.name}
                />
              ))}
              {memberList.length > 4 && (
                <a
                  className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  //TODO:Add link to member section
                  href="#"
                >
                  +{memberList.length - 4}
                </a>
              )}
            </div>
          </div>
        </div>
        <Board />
      </div>
    </DashboardLayouts>
  );
};

export default ProjectDashboard;
