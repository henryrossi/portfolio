import * as React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import type { Params } from "react-router-dom";
import getProjects from "./projects";

export function loader({ params }: { params: Params<"project">}) {
    const project = getProjects().find(
            proj => proj.split(" ")[1] == params.project
        );
    if (!project) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return project;
}

export default function Project() {
    const project = useLoaderData() as string;

    return <p>{project}</p>
}