export interface ProjectInformation {
    name: string,
    desc: string,
    photos?: string[],
    tags?: string[],
}

export interface ProjectOverview {
    name: string,
    desc: string,
}

const projectList: ProjectInformation[] = [
    {
        name: "Mescolare",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Motion Extraction",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Pong",
        desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

export function getProject(routeParam : string) : ProjectInformation | undefined {
    return projectList.find(proj => proj.name == routeParam)
}

export function getProjectOverviews() : ProjectOverview[] {
    return projectList.map(info => ({ name: info.name, desc: info.desc.slice(0, 50) }))
}

export function getProjectNames() : string[] {
    return projectList.map(info => info.name);
}