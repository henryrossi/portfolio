import * as React from "react";
import { useLoaderData } from "react-router-dom";
import { getProjectPreviews, ProjectPreview } from "./projects";

export function loader() : ProjectPreview[] {
    return getProjectPreviews();
}

export default function ProjectList() {
    const projects = useLoaderData() as ProjectPreview[];

    return (
        <ul>
            {projects.map(proj => 
                <li key={proj.name}>
                    <div className="project">
                        <div className="info">
                            <h2>{proj.name}</h2>
                            <ul>
                                {proj.tags && proj.tags.map(tag =>
                                    <li 
                                        key={proj.name + tag}
                                        className={"tag " + tag.color}
                                    >
                                        {tag.name}
                                    </li>
                                )}
                            </ul>
                            <p>{proj.desc}...</p>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    );
}