import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {css, cpp, html, js, python, node, react, git} from "../media"


export default function Skills() {
    

    return (
    <div className='skills-set'>
        {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
        {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
        <div className='skill'> <img className="skill-img" src={cpp} alt='cpp' title='cpp'></img></div>
        <div className='skill'> <img className="skill-img" src={html} alt='html' title='html'></img></div>
        <div className='skill'> <img className="skill-img" src={css} alt='css' title='css'></img></div>
        <div className='skill'> <img className="skill-img" src={js} alt='js' title='javascript'></img></div>
        <div className='skill'> <img className="skill-img" src={python} alt='python' title='python'></img></div>
        <div className='skill'> <img className="skill-img" src={node} alt='node' title='node'></img></div>
        <div className='skill'> <img className="skill-img" src={react} alt='react' title='react'></img></div>
        <div className='skill'> <img className="skill-img" src={git} alt='git' title='git'></img></div>

    </div>
    )
}
