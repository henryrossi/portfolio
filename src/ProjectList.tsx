import * as React from "react";
import { useLoaderData } from "react-router-dom";
import { getProjectOverviews, ProjectOverview } from "./projects";

export function loader() : ProjectOverview[] {
    return getProjectOverviews();
}

export default function ProjectList() {
    const projects = useLoaderData() as ProjectOverview[];

    return (
        <ul>
            {projects.map(proj => 
                <li key={proj.name}>
                    <div className="project">
                        <h2>{proj.name}</h2>
                        <p>{proj.desc}...</p>
                    </div>
                </li>
            )}
        </ul>
    );
}