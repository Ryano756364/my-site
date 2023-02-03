import './MainItem.css';
import { Parallax } from 'react-parallax';

function MainItem(){
  return (
      <div className="main-column">

        {/* University */}
        <div className="main-column__item">
          <div className="main-column__item-header" id="university">
              <div className="school">Kent State University, B.S. Computer and Digital Sciences.</div>
              <div className="school">Tech Elevator, Full Stack Certificate.</div>
              <div className="school">Java Full Stack Developer.</div>
          </div>
        </div>

        {/* Project One */}
        <div className="main-column__item" id="home-buyer-container">
          <Parallax bgImage={require('../img/home-bg-large-2.jpg')} bgImageAlt="Three homes with blue sky background" strength={-200}>
            <div className="main-column-text-container home-text-container">
              <div className="main-column__item-header">
                Pegasus, LLC Contact Form
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
          <Parallax bgImage={require('../img/bg-travel-giant.jpg')} bgImageAlt="City view" strength={-200}>
          <div className="main-column-text-container booking-text-container">
            <div className="main-column__item-header">
            R-Pod Booking Site Project
            </div>

            <div className="main-column__item-description">
              This project displays a knowledge of the flex design system along with creative elements to a nav bar and notifications attached to icons.
            </div>

            <div className="main-column__item-link-container">
              <a href="https://ryano756364.github.io/rpod-booking-site/" className='item-link-container__link'>Project Link</a>
            </div>
          </div>
          </Parallax>
        </div>

        {/* Project Three */}
        <div className="main-column__item">
          <Parallax bgImage={require('../img/bg-agent-giant.jpg')} bgImageAlt="Concrete home" strength={-200}>
          <div className="main-column-text-container agent-text-container">
            <div className="main-column__item-header ">
              Real Estate Agent Profile Project
            </div>

            <div className="main-column__item-description">
              This project displays a high affinity to utilizing the two-dimensional grid system to display great control over the site layout.
            </div>

            <div className="main-column__item-link-container">
              {/* <a href="https:www.google.com" className='item-link-container__link'>Link</a> */}
              Project Link Coming Soon
            </div>
          </div>
          </Parallax>
        </div>

      </div>
  )
}

export default MainItem;