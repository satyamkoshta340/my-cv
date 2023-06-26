import React, {useState, useEffect} from 'react'

function Header({ state, setState }) {
  const [nav, setNav] = useState(false);
  useEffect(()=>{
    setNav(false);
  }, [state]);
  return (
    <header id='main_header' className={`header ${nav? 'active': ''}`}>
      <div className='logo'>
        <a>
          <div className='logo_symbol'>S</div>
          <div className='logo_text'>Satyam <span>Koshta</span></div>
        </a>
      </div>
      <div className='nav-button' onClick={()=>{setNav(!nav)}}>
        <div className={`first ${nav? 'active': ''}`}></div>
        <div className={`second ${nav? 'active': ''}`}></div>
        <div className={`third ${nav? 'active': ''}`}></div>
      </div>

      <div className={`main_nav ${nav? 'active': ''}`}>
        <div className={`main_nav_item ${ state === 0 ? 'current_item' : ''}`} onClick={(e) => setState(0)}> About Me </div>
        <div className={`main_nav_item ${ state === 1 ? 'current_item' : ''}`} onClick={(e) => setState(1)}>Resume</div>
        <div className={`main_nav_item_last ${ state === 2 ? 'current_item' : ''}`} onClick={(e) => setState(2)}>Contact</div>
      </div>
    </header>
  )
}

export default Header