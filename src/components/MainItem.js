import './MainItem.css';
import { Parallax } from 'react-parallax';

function MainItem(){
  return (
      <div className="main-column">

        {/* University */}
        <div className="main-column__item">
          <div className="main-column__item-header" id="university">
              <div>Kent State University, B.S. Computer and Digital Sciences.</div>
              <div>Tech Elevator, Full Stack Certificate.</div>
              <div>Java Full Stack Developer.</div>
          </div>
        </div>

        {/* Project One */}
        <div className="main-column__item" id="home-buyer-container">
          <Parallax bgImage={require('../img/home-bg-large-2.jpg')} bgImageAlt="Three homes with blue sky background" strength={-200}>
            <div className="main-column-text-container right-text-container">
              <div className="main-column__item-header">
                Home Buyer Contact Form
              </div>
              <div className="main-column__item-description">
                This project displays knowledge of css-grid system to format a website with creative implementations added to menu, pricing, and contact form.
              </div>
              <div className="main-column__item-link-container">
                <a href="https://ryano756364.github.io/pegasus/" className='item-link-container__link'>Project Link</a>
              </div>
            </div>
          </Parallax>
        </div>

        {/* Project Two */}
        <div className="main-column__item">
          <Parallax bgImageAlt="City view" strength={-200}>
          <div className="main-column-text-container left-text-container">
            <div className="main-column__item-header">
              Item Header
            </div>

            <div className="main-column__item-description">
              Item Description
            </div>

            <div className="main-column__item-link-container">
              <a href="https:www.google.com" className='item-link-container__link'>Link</a>
            </div>
          </div>
          </Parallax>
        </div>

        {/* Project Three */}
        <div className="main-column__item">
          <div className="main-column-text-container right-text-container">
            <div className="main-column__item-header ">
              Item Header
            </div>

            <div className="main-column__item-description">
              Item Description
            </div>

            <div className="main-column__item-link-container">
              <a href="https:www.google.com" className='item-link-container__link'>Link</a>
            </div>
          </div>
        </div>

      </div>
  )
}

export default MainItem;