import { createRoot } from 'react-dom/client';
import * as React from 'react';
import './reset.css';
import './style.css';
import Tuna from './tuna.png';
import Pixels from './pixels';

const reactEntry = document.createElement('div');
reactEntry.id = 'root';
document.body.appendChild(reactEntry);

const root = createRoot(reactEntry);
root.render(
    <React.StrictMode>
        <div className='banner'>
            <div className='right'>
                <Pixels />
            </div>
            {/* <img src={Tuna} /> */}
        </div>
        <div className='side-bar'></div>
        <div className='projects'></div>
    </React.StrictMode>
);