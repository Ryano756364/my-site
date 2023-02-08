import './Footer.css';

function Footer(){
  return (
    <div className='footer'>
      <div className='footer__logo-box'>
        <img src={require("../img/logo-white.png")} alt="Ryan's Logo" className="logo"/>
      </div>

      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'><a href='https://ryanpodell.com' className='footer-link'>About Me</a></li>
              <li className='footer__item'><a href='https://github.com/Ryano756364?tab=repositories' className='footer-link'>More Projects</a></li>
              <li className='footer__item'><a href='https://www.linkedin.com/in/ryan-odell-java-developer/' className='footer-link'>LinkedIn</a></li>
              <li className='footer__item'><a href='https://github.com/Ryano756364' className='footer-link'>Github</a></li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__ending'>
            Built by Ryan O'Dell. Projects will continue to be uploaded on an ongoing basis. Check back soon to see what new applications are built! 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;