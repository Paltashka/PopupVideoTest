import { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { TbVolume, TbVolumeOff } from "react-icons/tb";
function App() {
  const videoRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const increaseVideo = () => {
    setIsOpen(true);
    setIsMuted(false);
    videoRef.current.load();
  };
  const decreaseVideo = (e) => {
    e.stopPropagation()
    setIsOpen(false);
    setIsMuted(true);
    videoRef.current.load();
  };
  const toggleVideo = () => {
    if (isVideoPlaying) {
      setIsVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };
  const toggleMute = (e) =>{
    e.stopPropagation()
    if(isMuted){
      setIsMuted(false)
    }else{
      setIsMuted(true)
    }
  }
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>This is a webpage</h1>
      <div
        onClick={isOpen ? toggleVideo : increaseVideo}
        className={isOpen ? "videoBoxBig" : "videoBoxSmall"}
      >
        <video
          className="video"
          loop
          autoPlay={true}
          muted={isMuted}
          ref={videoRef}
          controls={false}
        >
          <source src="/video.mp4" type="video/webm" />
        </video>
        {isOpen && (
          <AiOutlineMinus
            size={28}
            className="decreaseButton"
            onClick={(e)=>decreaseVideo(e)}
          />
        )}
        {!isOpen && (
          <FaPlay
            size={22}
            className="increaseButton"
            onClick={increaseVideo}
          />
        )}
        {isOpen && isMuted && (
          <TbVolumeOff
            size={28}
            className="muteButton"
            onClick={(e) => toggleMute(e)}
          />
        )}
        {isOpen && !isMuted && (
          <TbVolume
            size={28}
            className="muteButton"
            onClick={(e) => toggleMute(e)}
          />
        )}
        {isOpen && isVideoPlaying && (
          <FaPause size={19} className="toggleButton" onClick={toggleVideo} />
        )}
        {isOpen && !isVideoPlaying && (
          <FaPlay size={19} className="toggleButton" onClick={toggleVideo} />
        )}
        {isOpen && (
          <>
            <div className="aboutPopUp">
              <h1 className="aboutTitle">This is FacePop!</h1>
              <p className="aboutDescription">
                A widget you can use to upload videos and get personal with your
                customers to schedule meetings, ask for reviews, or share the
                latest features with its CTA functionality
              </p>
            </div>
            <button className="mainButton">Try for free</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
