import './Header.css';
import { ReactComponent as LinkedInIcon } from "../img/SVG/linkedin2.svg"
import { ReactComponent as GitHub } from "../img/SVG/github.svg"

function Header(){
  return (
    <header className="header">
        <div className="logo-container">  
          <img src={require("../img/logo-no-background.png")} alt="Ryan's Logo" className="logo-container__logo"/>
        </div>

        <nav className="user-nav">
          <a href="https://www.linkedin.com/in/ryan-odell-java-developer/">
            <div className="user-nav__icon-box" >
              <svg className="user-nav__icon">
                <LinkedInIcon className='linkedin-icon' alt='LinkedIn Icon'></LinkedInIcon>
              </svg>
            </div>
          </a>

          <a href="https://github.com/Ryano756364">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <GitHub className='github-icon' alt='GitHub Icon'></GitHub>
              </svg>
            </div>
          </a>
          
          <div className="user-nav__icon-box">
            <div className="user-nav__icon">

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
                    <li className="navigation__item"><a href="https://github.com/Ryano756364?tab=repositories" className='navigation__link'>Projects</a></li>
                    {/*Page router coming soon <li className="navigation__item"><a href="https://www.google.com/" className='navigation__link'>Who I Am</a></li> */}
                    <li className="navigation__item"><a href="https://www.linkedin.com/in/ryan-odell-java-developer/" className='navigation__link'>LinkedIn</a></li>
                    <li className="navigation__item"><a href="https://github.com/Ryano756364" className='navigation__link'>Github</a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header;