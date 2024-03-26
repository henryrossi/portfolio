import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import './style.css';
import Portfolio, { loader as portfolioLoader } from './Portfolio';
import ProjectList, { loader as projectListLoader } from './ProjectList';
import Project, { loader as projectLoader } from './Project';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Portfolio />,
        errorElement: <ErrorPage />,
        loader: portfolioLoader,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true, 
                        element: <ProjectList />,
                        loader: projectListLoader
                    },
                    {
                        path: "/:project",
                        element: <Project />,
                        loader: projectLoader
                    },
                ]
            }
        ],
    }
]);

const reactEntry = document.createElement('div');
reactEntry.id = 'root';
document.body.appendChild(reactEntry);

const root = createRoot(reactEntry);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);