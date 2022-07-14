import React from 'react';

export default function Navbar({state, setState}) {
    const changeState = ()=>{
        const id = state === 0 ? "home" : "about-page";
        const motion = state === 0 ? "slide-left" : "slide-right";
        const st = state === 0 ? 1 : 0;
        const target_div = document.getElementById(id);
        target_div.classList.add(motion);
        setTimeout(()=>{
            setState(st);
            target_div.classList.remove(motion);
        }, 1500);  
    }
    return (
        <div className='nav'>
            {/* <div className='title hover-element'>Satyam Koshta</div> */}
            <div className='options'>
                    <div className='btn hover-element about' onClick={(e)=>{changeState()}}>{state === 0 ?'ABOUT': 'HOME'}</div> |
                    <div className='btn hover-element contact'><a href='mailto:satyamkoshta340@gmail.com'>CONTACT </a></div>       
            </div>
        </div>
    )
}
