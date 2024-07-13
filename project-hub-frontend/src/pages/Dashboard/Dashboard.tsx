import DashboardLayouts from "@/layouts/DashboardLayouts/DashboardLayouts";
import DashboardCards from "./components/DashboardCards";
import { TProject } from "./types";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Fetching Data");
    fetch("http://localhost:8000/api/data")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setData(data));
    console.log(data);
  }, []);
  const dashboardCardInfo: TProject[] = [
    {
      projectID: "dffdfbdfb",
      projectTitle: "UI/UX Review Check",
      projectTag: "Urgent",
      projectDescription: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona`,
      memberList: [
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
        { name: "Member 1", profileImg: "https://github.com/shadcn.png" },
      ],
      deadline: new Date("2024-07-25"),
      progress: 78,
    },
    {
      projectID: "abc123xyz",
      projectTitle: "Marketing Campaign",
      projectTag: "High Priority",
      projectDescription: `Launch the summer marketing campaign for the new product line. Focus on social media platforms and influencer collaborations.  `,
      memberList: [
        { name: "Member 2", profileImg: "https://github.com/username2.png" },
        { name: "Member 3", profileImg: "https://github.com/username3.png" },
        { name: "Member 4", profileImg: "https://github.com/username4.png" },
        { name: "Member 5", profileImg: "https://github.com/username5.png" },
      ],
      deadline: new Date("2024-08-01"),
      progress: 80,
    },
    {
      projectID: "qwerty789",
      projectTitle: "Backend API Development",
      projectTag: "Medium",
      projectDescription: `Develop the RESTful API for the new mobile application. Ensure it meets all performance and security requirements.`,
      memberList: [
        { name: "Member 6", profileImg: "https://github.com/username6.png" },
        { name: "Member 7", profileImg: "https://github.com/username7.png" },
        { name: "Member 8", profileImg: "https://github.com/username8.png" },
      ],
      deadline: new Date("2024-09-15"),
      progress: 20,
    },
    {
      projectID: "project456",
      projectTitle: "Website Redesign",
      projectTag: "Low Priority",
      projectDescription: `Redesign the corporate website to improve user experience and accessibility. Incorporate new branding elements and updated content.`,
      memberList: [
        { name: "Member 9", profileImg: "https://github.com/username9.png" },
        { name: "Member 10", profileImg: "https://github.com/username10.png" },
        { name: "Member 11", profileImg: "https://github.com/username11.png" },
        { name: "Member 12", profileImg: "https://github.com/username12.png" },
        { name: "Member 13", profileImg: "https://github.com/username13.png" },
      ],
      deadline: new Date("2024-10-30"),
      progress: 90,
    },
    {
      projectID: "zyx321cba",
      projectTitle: "Customer Feedback Analysis",
      projectTag: "High Priority",
      projectDescription: `Analyze customer feedback from the last quarter to identify trends and areas for improvement. Prepare a report with actionable insights.`,
      memberList: [
        { name: "Member 14", profileImg: "https://github.com/username14.png" },
        { name: "Member 15", profileImg: "https://github.com/username15.png" },
        { name: "Member 16", profileImg: "https://github.com/username16.png" },
        { name: "Member 17", profileImg: "https://github.com/username17.png" },
      ],
      deadline: new Date("2024-08-20"),
      progress: 70,
      projectImgSrc:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
    },
  ];

  return (
    <>
      <DashboardLayouts>
        <div className="sm:p-20 p-7 flex flex-wrap gap-10 justify-evenly">
          {dashboardCardInfo.map((dashboardcard, index) => (
            <DashboardCards key={`DashboardCard-${index}`} {...dashboardcard} />
          ))}
        </div>
      </DashboardLayouts>
    </>
  );
};

export default Dashboard;
