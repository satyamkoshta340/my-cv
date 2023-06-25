import './App.css';
import './styles/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(0);

  const load = () =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Replace 3000 with the actual time it takes to load your content
  }
  useEffect(() => {
    // Simulating the content loading delay with setTimeout
    setIsLoading(true);
    load();
  }, [state]);
  return (
    <>
      <div className={`main page ${isLoading ? 'tilted' : ''}`}>
        <Header state={state} setState={setState} />
        { state === 0 && <About />}
        { state === 1 && <Resume />}
        { state === 2 && <Contact />}
        <Footer/>
      </div>
    </>
  )
}

export default App
