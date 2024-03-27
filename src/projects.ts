export interface ProjectInformation {
  name: string,
  desc: string,
  photos?: string[],
  tags?: ProjectTag[],
}

export interface ProjectPreview {
  name: string,
  desc: string,
  tags?: ProjectTag[],
}

export interface ProjectTag {
  name: string,
  color: string,
}

const projectList: ProjectInformation[] = [
  {
    name: "Mescolare",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      { name: "React", color: "blue" }, 
      { name: "Django", color: "green" },
      { name: "AWS", color: "black" },
      { name: "PostgreSQL", color: "pink" },
    ]
  },
  {
    name: "Motion Extraction",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      { name: "C Language", color: "orange" },
      { name: "libav", color: "red" },
    ]
  },
  {
    name: "Pong",
    desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      { name: "C++", color: "orange" },
      { name: "SMFL", color: "purple" },
    ]
  }
];

export function getProject(routeParam : string) : ProjectInformation | undefined {
  return projectList.find(info => info.name == routeParam)
}

export function getProjectPreviews() : ProjectPreview[] {
  return projectList.map(info => ({ ...info, desc: info.desc.slice(0, 50) }))
}

export function getProjectNames() : string[] {
  return projectList.map(info => info.name);
}