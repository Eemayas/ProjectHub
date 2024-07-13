import { LinearProgressBar } from "@/components/CircularProgressBar";
import React from "react";
import { TProject } from "../types";
import { useNavigate } from "react-router-dom";
import Deadline from "./DeadlineIndicators";
import CardProfilePic_1 from "@/assets/CardProfilePic_1.png";
import CardProfilePic_2 from "@/assets/CardProfilePic_2.png";
import CardProfilePic_3 from "@/assets/CardProfilePic_3.png";
import CardProfilePic_4 from "@/assets/CardProfilePic_4.png";
import CardProfilePic_5 from "@/assets/CardProfilePic_5.png";
import CardProfilePic_6 from "@/assets/CardProfilePic_6.png";
const imgSrc = [
  CardProfilePic_1,
  CardProfilePic_2,
  CardProfilePic_3,
  CardProfilePic_4,
  CardProfilePic_5,
  CardProfilePic_6,
];

const DashboardCards: React.FC<TProject> = ({
  projectID,
  projectTitle,
  projectTag,
  projectDescription,
  memberList,
  deadline,
  progress,
  projectImgSrc,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col mt-6 p-6 gap-3 text-gray-700 dark:text-gray-300 dark:border-gray-300 border-gray-700 border shadow-card-light dark:shadow-card-dark rounded-2xl sm:w-96 w-full"
      onClick={() => navigate(`/project/${projectID}`)}
    >
      <>
        <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={
              projectImgSrc
                ? projectImgSrc
                : imgSrc[Math.floor(Math.random() * imgSrc.length)]
            }
            alt="card-image"
            className="object-cover w-full h-full"
          />
          <div className="absolute right-3 top-3 py-1 px-3 rounded-md bg-red-900 bg-opacity-80 ">
            {projectTag}
          </div>
        </div>

        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {projectTitle}
        </h5>
        <div className="block text-base antialiased font-light leading-relaxed text-inherit h-[4.7rem] overflow-hidden">
          <p className="line-clamp-3">{projectDescription}</p>
        </div>
      </>
      <div className="mt-2 border-t-[1px] dark:border-gray-300 border-gray-700 " />
      <LinearProgressBar value={progress} />
      <div className="pt-2 border-t-[1px] dark:border-gray-300 border-gray-700 flex items-center justify-between">
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
        </div>{" "}
        <Deadline deadline={deadline} />
      </div>
    </div>
  );
};

export default DashboardCards;
