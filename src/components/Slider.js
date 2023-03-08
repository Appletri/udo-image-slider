import Slide from "./Slide";
import prev_icon from '../assets/arrow_back.png';
import next_icon from '../assets/arrow_forward.png';
import { useState } from "react";

function Slider(props) {
  const [content, setContent] = useState(props.content);
  const [curSlide, setCurSlide] = useState(Math.floor((content.length / 2)));
  const [slideAnimation, setSlideAnimation] = useState('still');

  const movePrevious = () => {
    //case break
    if(slideAnimation !== 'still') {
      return
    };

    //applies animation
    setSlideAnimation('previous');
    setCurSlide(curSlide - 1);

    //shifts content array backwards after animation has finished
    setTimeout(() => {
      const slides = content;
      const slideToMove = slides.pop();
      slides.unshift(slideToMove);
      setContent(slides);
      setCurSlide(Math.floor((content.length / 2)));
      setSlideAnimation('still');
    }, 500);
  };

  const moveNext = () => {
    //case break
    if(slideAnimation !== 'still') {
      return
    };

    //applies animation
    setSlideAnimation('next');
    setCurSlide(curSlide + 1);

    //shifts content array backwards after animation has finished
    setTimeout(() => {
      const slides = content;
      const slideToMove = slides.splice(0,1);
      slides.push(slideToMove[0]);
      setContent(slides);
      setCurSlide(Math.floor((content.length / 2)));
      setSlideAnimation('still');
    }, 500);
  };

  if (!content) {
    return <p>no slides</p>
  };
  return (
    <div className="slider">
      <div className="slides">
        {content.map((slide, index) => {
          return <Slide obj={slide} index={index} current={curSlide} 
          animation={slideAnimation}/>
        })}
      </div>
      <img className="prev-button" src={prev_icon} onClick={movePrevious} alt="back arrow"></img>
      <img className="next-button" src={next_icon} onClick={moveNext} alt="forward arrow"></img>
    </div>
  );
};

export default Slider;