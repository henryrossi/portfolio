import { createRoot } from 'react-dom/client';
import * as React from 'react';
import './style.css';
import Cat from './cat.png';

import PrintMe from './print';

function Component() {
    return <div className='hello'>Hello World</div>;
}

function Icon() {
    return <img src={Cat} />;
}

const reactEntry = document.createElement('div');
reactEntry.id = 'root';
document.body.appendChild(reactEntry);

const root = createRoot(reactEntry);
root.render(
    <React.StrictMode>
        <Component />
        <PrintMe />
        <Icon />
    </React.StrictMode>
);
