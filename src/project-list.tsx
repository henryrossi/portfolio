import * as React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import getProjects from "./projects";

export function loader() {
    return getProjects();
}

export default function ProjectList() {
    const projects = useLoaderData() as string[];

    return (
        <>
            {projects.map(proj => 
                <div key={proj} className="project">
                    {proj}
                </div>
            )}
        </>
    );
}