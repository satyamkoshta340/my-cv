import React from 'react';
import Navbar from '../components/navbar';
import About from '../ui/about';
import Home from '../ui/home.js';
import { useState } from 'react';

export default function Main() {
    // console.log(data.activities);
    const [state, setState] = useState(0);
    return (
     
        <div className="main" id="main">
            <Navbar state={state} setState={setState} />
            {
                state === 0 ? <Home /> : <About />
            }
        </div>
        
    )
}
