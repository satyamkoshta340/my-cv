import React from 'react'

function Header() {
  return (
    <header id='main_header' className='header'>
      <div className='logo'>
        <a>
          <div className='logo_symbol'>S</div>
          <div className='logo_text'>Satyam <span>Koshta</span></div>
        </a>
      </div>

      <div className='main_nav'>
        <div className='main_nav_item current_item'>About Me </div>
        <div className='main_nav_item'>Resume</div>
        {/* <div className='main_nav_item'>Portfolio</div> */}
        <div className='main_nav_item_last'>Contact</div>
      </div>
    </header>
  )
}

export default Header