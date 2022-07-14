import React from "react";
import Skills from '../components/skills';
import data from "../data/data.json"
import Footer from "../components/footer";
import { useState, useRef } from 'react';

export default function Home() {
    const [theme, setTheme] = useState('light');
    const [activities, setActivities] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [education, setEducation] = useState([]);
    const hobby = useRef();
    const edu = useRef();
    const activity = useRef();
    window.addEventListener('scroll',(event) => {
        // console.log(window.pageYOffset);
        if(window.pageYOffset > 70){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
        document.body.classList= [];
        document.body.className = theme;
    });

    return <div id="home">
        <div id='trigger-item-1'></div>
            <div id='trigger-item-2'></div>
            <div id='trigger-item-2'></div>
            <div id='bg'>
            <div className={`description`}>
                <ul className="dynamic-text">
                    <li><span>HELLO...</span></li>
                    <li><span>I'M SATYAM KOSHTA</span></li>
                    <li><span>WEB DEVELOPER</span></li>
                </ul>
                
            </div>
            <div className='items'>
                <div className='item-1 item education-active' ref={edu} onMouseMove={ ()=>{
                    if(window.pageYOffset > 70){
                        document.body.classList =[];
                        document.body.className="item-1-hovered";
                    }}}
                    onMouseLeave ={()=>{
                        if(window.pageYOffset > 70){
                            document.body.classList= [];
                            document.body.className = theme;
                            setEducation([]);
                            edu.current.classList.add("education-active");
                        }
                    }}
                    onClick={()=>{
                        edu.current.classList.remove("education-active");
                        setEducation(data.education);
                    }}> {[...education].map((e) =>(
                        
                        <div key={e} className='points'>{e}</div>
                        
                    ))} </div> 
                <div className='item-2 item hobby-active' ref={hobby} onMouseMove={ ()=>{
                    if(window.pageYOffset > 70){
                        document.body.classList =[];
                        document.body.className="item-2-hovered";
                    }}}
                    onMouseLeave ={()=>{
                        if(window.pageYOffset > 70){
                            document.body.classList= [];
                            document.body.className = theme;
                            setHobbies([]);
                            hobby.current.classList.add("hobby-active");
                        }
                    }}
                    
                    onClick={()=>{
                        hobby.current.classList.remove("hobby-active");
                        setHobbies(data.hobbies);
                    }}> {[...hobbies].map((e) =>(
                        
                        <div key={e} className='points'>{e}</div>
                        
                    ))}</div>
                <div className='item-3 item activities-active' ref={activity} onMouseMove={ ()=>{
                    if(window.pageYOffset > 70){
                        document.body.classList =[];
                        document.body.className="item-3-hovered";
                    }}}
                    onMouseLeave ={()=>{
                        if(window.pageYOffset > 70){
                            document.body.classList= [];
                            document.body.className = theme;
                            setActivities([]);
                            activity.current.classList.add("activities-active");
                        }
                    }}
                    onClick={()=>{
                        activity.current.classList.remove("activities-active");
                        setActivities(data.activities);
                    }}> {[...activities].map((e) =>(
                        
                        <div key={e}  className='points'>{e}</div>
                        
                    ))} </div>        
            </div>
        </div>
        <Skills />
        <Footer />
    </div>
}