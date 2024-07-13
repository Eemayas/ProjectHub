import DashboardLayouts from "@/layouts/DashboardLayouts/DashboardLayouts";
import { useParams } from "react-router-dom";
const ProjectMemberList = () => {
  const { id } = useParams();
  console.log({ projectID: id });
  // Example data
  const customers = [
    {
      name: "Neil Sims",
      email: "email@windster.com",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1695662724216-43f8f07a464b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww",
      progressPercentages: 20,
      numberOfTaskAssigned: 4,
    },
    {
      name: "Bonnie Green",
      email: "email@windster.com",
      imageSrc: "https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFrZSUyMHdvbWFufGVufDB8fDB8fHww",
      progressPercentages: 37,
      numberOfTaskAssigned: 9,
    },
    // Add more customers as needed
  ];
  return (
    <DashboardLayouts isSidebarRequired={true}>
      <div className="p-10 flex flex-col gap-10 text-gray-700 dark:text-gray-300 ">
        <LatestCustomers customers={customers} />
      </div>
    </DashboardLayouts>
  );
};
import React from "react";
import  {CircularProgressBar,
} from "@/components/CircularProgressBar";

interface Customer {
  name: string;
  email: string;
  imageSrc: string;
  progressPercentages: number;
  numberOfTaskAssigned: number; // Assuming memberList is an array of strings
}

interface Props {
  customers: Customer[];
}

const LatestCustomers: React.FC<Props> = ({ customers }) => {
  return (
    <div className="w-full max-lg-md p-4 bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-card-light dark:shadow-card-dark">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Members List
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {customers.map((customer, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className=" flex flex-row">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={customer.imageSrc}
                      alt={`${customer.name} image`}
                    />
                  </div>
                  <div className="flex flex-col min-w-0 ms-4 jus">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {customer.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {customer.email}
                    </p>
                  </div>{" "}
                </div>
                <p className="text-xs text-gray-400 truncate dark:text-gray-500">
                  Number of Task Assigned: {customer.numberOfTaskAssigned}
                </p>
                <CircularProgressBar
                  size={40}
                  strokeWidth={5}
                  percentage={60}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectMemberList;
