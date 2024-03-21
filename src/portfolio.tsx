import * as React from "react";
import { Outlet, useLoaderData, Link } from "react-router-dom";
import getProjects from "./projects";

export function loader() {
    return getProjects();
}

export default function Portfolio() {
    const projects = useLoaderData() as string[];

    return (
        <div className="page">
            <div className="banner">
                <h1>Henry Rossi's Portfolio</h1>
                <p>featuring tuna</p>
            </div>
            <div className="side-menu">
                <Link to="">Project List</Link>
                {
                    projects.map(
                            proj => <Link key={proj + " button"} to={proj.split(" ")[1]}>
                                {proj}
                            </Link>
                        )
                }
            </div>
            <div className="projects">
                <Outlet />
            </div>
        </div>
    );
}