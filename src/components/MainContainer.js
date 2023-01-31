import './MainContainer.css';
import { ReactComponent as LinkedInIcon } from "../img/SVG/linkedin2.svg"
import { ReactComponent as GitHub } from "../img/SVG/github.svg"
import MainItem from './MainItem';
import Footer from './Footer';

function MainContainer(){
  return (
    <div className="main-container">
      <header className="header">
        <img src={require("../img/logo-black.png")} alt="Ryan's Logo" class="logo"/>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <LinkedInIcon className='linkedin-icon' alt='LinkedIn Icon'></LinkedInIcon>
            </svg>
          </div>

          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <GitHub className='github-icon' alt='GitHub Icon'></GitHub>
            </svg>
          </div>

          <div className="user-nav__icon-box">
            <div className="user-nav__menu">
              MENU
            </div>
          </div>
        </nav>
      </header>

      <MainItem />
      <MainItem />
      <MainItem />
      <MainItem />
      <MainItem />

      <Footer />
    </div>
  )
}

export default MainContainer;
