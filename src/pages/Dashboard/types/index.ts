export type TMember = {
  name: string;
  profileImg: string;
};

export type TProject = {
  projectImgSrc?: string;
  progress: number;
  projectTitle: string;
  projectTag: string;
  projectDescription: string;
  memberList: TMember[];
  projectID: string;
  deadline: Date;
};
