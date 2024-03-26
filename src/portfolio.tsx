import * as React from "react";
import { Outlet, useLoaderData, Link, NavLink } from "react-router-dom";
import { getProjectNames } from "./projects";

export function loader() {
    return getProjectNames();
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
                <NavLink to="" className="projects-link">Projects</NavLink>
                <ul>
                {
                    projects.map(
                            proj => <li key={proj + "-link"}>
                                <NavLink 
                                    to={`${proj}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                            ? "pending"
                                            : ""
                                    }   
                                >
                                    {proj}
                                </NavLink>
                            </li>
                        )
                }
                </ul>
            </div>
            <div className="projects">
                <Outlet />
            </div>
        </div>
    );
}