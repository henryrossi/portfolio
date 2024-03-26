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

    return <p>{project.name}</p>
}