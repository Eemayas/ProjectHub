export type TTypedColumn = "todo" | "inprogress" | "done";

export interface TImage {
  buckedId: string;
  fileId: string;
}

export interface TTodo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TTypedColumn;
  image?: TImage;
  taskDescription: string;
  progressPrecentage: number;
  resourceList: TResourcesList[];
  memberList: TMemberList[];
}
export interface TColumn {
  id: TTypedColumn;
  todos: TTodo[];
}

export interface TBoard {
  columns: Map<TTypedColumn, TColumn>;
}

export interface TResourcesList {
  name: string;
  link: string;
  description: string;
}
export interface TMemberList {
  name: string;
  profileImg: string;
}

export const board2: TBoard = {
  columns: new Map([
    [
      "todo",
      {
        id: "todo",
        todos: [
          {
            $id: "653b4d23c467f099328a",
            $createdAt: "2023-10-27T05:39:47.805+00:00",
            title: "Take the Dog out for the walk",
            status: "todo",
            progressPrecentage: 20,
            resourceList: [
              {
                name: "Dog Leash",
                link: "https://example.com/dog-leash",
                description: "A sturdy dog leash for walks.",
              },
            ],
            image: {
              buckedId: "bucket123",
              fileId: "file123",
            },
            taskDescription: "Take the dog for a 30-minute walk in the park.",
            memberList: [
              {
                name: "John Doe",
                profileImg: "https://example.com/john-doe.jpg",
              },
            ],
          },
        ],
      },
    ],
    [
      "inprogress",
      {
        id: "inprogress",
        todos: [
          {
            $id: "653bd2c0060a7af82657",
            $createdAt: "2023-10-27T15:09:52.025+00:00",
            title: "Do your HW",
            status: "inprogress",
            progressPrecentage: 50,
            resourceList: [
              {
                name: "Math Textbook",
                link: "https://example.com/math-textbook",
                description: "Chapter 3 problems.",
              },
              {
                name: "Online Tutorial",
                link: "https://example.com/tutorial",
                description: "Video tutorial on the topic.",
              },
            ],
            image: {
              buckedId: "bucket456",
              fileId: "file456",
            },
            taskDescription: "Complete math homework for Chapter 3.",
            memberList: [
              {
                name: "Jane Smith",
                profileImg: "https://example.com/jane-smith.jpg",
              },
            ],
          },
        ],
      },
    ],
    [
      "done",
      {
        id: "done",
        todos: [
          {
            $id: "653bd3e0080a8bc92768",
            $createdAt: "2023-10-28T10:22:37.914+00:00",
            title: "Submit project report",
            status: "done",
            progressPrecentage: 100,
            resourceList: [
              {
                name: "Report Template",
                link: "https://example.com/report-template",
                description: "Template for the project report.",
              },
            ],
            image: {
              buckedId: "bucket789",
              fileId: "file789",
            },
            taskDescription:
              "Submit the final project report to the instructor.",
            memberList: [
              {
                name: "Emily Johnson",
                profileImg: "https://example.com/emily-johnson.jpg",
              },
            ],
          },
        ],
      },
    ],
  ]),
};

export const board1: TBoard = {
  columns: new Map([
    [
      "todo",
      {
        id: "todo",
        todos: [
          {
            $id: "654a4d23d467f299329a",
            $createdAt: "2023-11-01T08:23:11.005+00:00",
            title: "Set up development environment",
            status: "todo",
            progressPrecentage: 10,
            resourceList: [
              {
                name: "VS Code",
                link: "https://code.visualstudio.com/",
                description: "Download and install Visual Studio Code.",
              },
              {
                name: "Node.js",
                link: "https://nodejs.org/",
                description: "Download and install Node.js.",
              },
            ],
            image: {
              buckedId: "bucket123",
              fileId: "file001",
            },
            taskDescription:
              "Install necessary software and tools for development.",
            memberList: [
              {
                name: "Member 14",
                profileImg: "https://github.com/username14.png",
              },
              {
                name: "Member 15",
                profileImg: "https://github.com/username15.png",
              },
              {
                name: "Member 16",
                profileImg: "https://github.com/username16.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
            ],
          },
        ],
      },
    ],
    [
      "inprogress",
      {
        id: "inprogress",
        todos: [
          {
            $id: "654bd2c0160a7bf82657",
            $createdAt: "2023-11-02T09:15:25.025+00:00",
            title: "Implement user authentication",
            status: "inprogress",
            progressPrecentage: 40,
            resourceList: [
              {
                name: "Auth0 Documentation",
                link: "https://auth0.com/docs/",
                description:
                  "Learn how to implement authentication with Auth0.",
              },
              {
                name: "JWT Guide",
                link: "https://jwt.io/introduction/",
                description:
                  "Understanding JSON Web Tokens for authentication.",
              },
            ],
            image: {
              buckedId: "bucket456",
              fileId: "file002",
            },
            taskDescription:
              "Add user login and signup functionality using Auth0.",
            memberList: [
              {
                name: "Member 14",
                profileImg: "https://github.com/username14.png",
              },
              {
                name: "Member 15",
                profileImg: "https://github.com/username15.png",
              },
            ],
          },
        ],
      },
    ],
    [
      "done",
      {
        id: "done",
        todos: [
          {
            $id: "654cd3f0080a8dc92768",
            $createdAt: "2023-11-03T12:30:45.914+00:00",
            title: "Deploy application to AWS",
            status: "done",
            progressPrecentage: 100,
            resourceList: [
              {
                name: "AWS Deployment Guide",
                link: "https://aws.amazon.com/getting-started/",
                description:
                  "Step-by-step guide to deploying applications on AWS.",
              },
            ],
            image: {
              buckedId: "bucket789",
              fileId: "file003",
            },
            taskDescription:
              "Deploy the application to AWS and verify its functionality.",
            memberList: [
              {
                name: "Member 14",
                profileImg: "https://github.com/username14.png",
              },
              {
                name: "Member 15",
                profileImg: "https://github.com/username15.png",
              },
              {
                name: "Member 16",
                profileImg: "https://github.com/username16.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 14",
                profileImg: "https://github.com/username14.png",
              },
              {
                name: "Member 15",
                profileImg: "https://github.com/username15.png",
              },
              {
                name: "Member 16",
                profileImg: "https://github.com/username16.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
              {
                name: "Member 17",
                profileImg: "https://github.com/username17.png",
              },
            ],
          },
        ],
      },
    ],
  ]),
};
