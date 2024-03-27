import * as React from "react";
import { useLoaderData } from "react-router-dom";
import type { Params } from "react-router-dom";
import { getProject, ProjectInformation } from "./projects";

export function loader({ params }: { params: Params<"project">}) : ProjectInformation {
  const project = params.project ? getProject(params.project) : undefined
  if (!project) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return project;
}

export default function Project() {
  const project = useLoaderData() as ProjectInformation;

  return (
    <div className="project">
      <div className="project-info-section">
        <h2>{project.name}</h2>
        <ul>
          {project.tags && project.tags.map(tag =>
            <li 
              key={project.name + tag.name}
              className={"tag " + tag.color}
            >
              {tag.name}
            </li>
          )}
        </ul>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
