import { useEffect, useState } from "react";

function Slide(props) {
  // const[focusState, setFocusState] = useState('');
  
  // useEffect(() => {
  //   if (props.animation !== 'still') {
  //     setFocusState('');
  //   } else {
  //     setFocusState('focused')  
  //   }
  // }, [props.animation]);

  return (
    <div className={props.index === props.current ? `slide ${'focused'} ${props.animation}` : `slide ${props.animation}`}>
      <img src={props.obj.image} alt="placeholder"></img>
      <h1>{props.obj.header}</h1>
      <p>{props.obj.description}</p>
    </div>
  );
};

export default Slide;