import './HeaderSub.css';
/* import VideoGiant from '../img/videos/background-video-giant.mp4' */
import VideoGiant from '../img/videos/bg-vd-giant.mp4';

function HeaderSub(){
  return (
    <div className="header-sub-container">
      {/* <div className="video-container">
        <video src={VideoGiant} autoPlay loop muted className="video-container__video">

        </video>
      </div> */}

      <div className='video-container'>
        <video className='video-container__content' autoPlay loop muted>
          <source src={VideoGiant} type='video/mp4' className="video-container__video"></source>
          Background video is to play here!
        </video>
      </div>

      <div className="text-container">
        <div className="text-container__text">
          I help companies enhance efficiency through software development solutions
        </div>
      </div>
    </div>
  )
}

export default HeaderSub;
