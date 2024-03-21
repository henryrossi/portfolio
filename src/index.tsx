import { createRoot } from 'react-dom/client';
import * as React from 'react';
import './reset.css';
import './style.css';

const projectList = ["project 1", "project 2", "project 3", "project 4", "project 5"]

const reactEntry = document.createElement('div');
reactEntry.id = 'root';
document.body.appendChild(reactEntry);

const root = createRoot(reactEntry);
root.render(
    <React.StrictMode>
        <div className="page">
            <div className="banner">
                <h1>Henry Rossi's Portfolio</h1>
                <p>featuring tuna</p>
            </div>
            <div className="side-menu">
                {projectList.map(proj => <button key={proj + " button"} className="">{proj}</button>)}
            </div>
            <div className="projects">
                {projectList.map(proj => <div key={proj} className="project">{proj}</div>)}
            </div>
        </div>
    </React.StrictMode>
);