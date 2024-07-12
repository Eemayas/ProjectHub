import { Button } from "@/components/ui/button";
import DashboardLayouts from "@/layouts/DashboardLayouts/DashboardLayouts";
import { BiAddToQueue } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Board from "./components/Board";
import MemberAvatarGroup from "@/components/MemberAvatrGroup";
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
      <div className="p-10 flex flex-col gap-10 text-gray-700 dark:text-gray-300 ">
        <div className=" flex justify-between items-center">
          <div className="font-semibold text-[46px] leading-[56px] capitalize ">
            {projectname}
          </div>
          <div className="flex gap-3">
            <Button className="gap-2">
              <BiAddToQueue className="h-4 w-4"></BiAddToQueue>
              Invite
            </Button>
            <MemberAvatarGroup memberList={memberList} />
          </div>
        </div>
        <Board />
      </div>
    </DashboardLayouts>
  );
};

export default ProjectDashboard;
