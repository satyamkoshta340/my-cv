import React from 'react'

function Header({ state, setState }) {
  return (
    <header id='main_header' className='header'>
      <div className='logo'>
        <a>
          <div className='logo_symbol'>S</div>
          <div className='logo_text'>Satyam <span>Koshta</span></div>
        </a>
      </div>

      <div className='main_nav'>
        <div className= {`main_nav_item ${ state === 0 ? 'current_item' : ''}`} onClick={(e) => setState(0)}> About Me </div>
        <div className={`main_nav_item ${ state === 1 ? 'current_item' : ''}`} onClick={(e) => setState(1)}>Resume</div>
        <div className={`main_nav_item_last ${ state === 2 ? 'current_item' : ''}`} onClick={(e) => setState(2)}>Contact</div>
      </div>
    </header>
  )
}

export default Header