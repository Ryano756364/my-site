import './HamburgerMenu.css';
import React, {useState} from "react";

const HamburgerMenu = () => {

  return (
    <div className="navigation">
      {/* Checkbox trick */}
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />  {/* Using general sibling selected to grab navigation_background */}
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation_icon">&nbsp;</span>  {/* for hamburger lines */}
      </label>

      {/* Hidden background to be displayed when clicked */}
      <div className="navigation_background"></div>

      <nav className="navigation_nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="https://www.google.com/" className='navigation__link'>Projects</a></li>
          {/*Page router coming soon <li className="navigation__item"><a href="https://www.google.com/" className='navigation__link'>Who I Am</a></li> */}
          <li className="navigation__item"><a href="https://www.linkedin.com/in/ryan-odell-java-developer/" className='navigation__link'>LinkedIn</a></li>
          <li className="navigation__item"><a href="https://github.com/Ryano756364" className='navigation__link'>Github</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu;
