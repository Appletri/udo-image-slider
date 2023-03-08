function Slide(props) {
  return (
    <div className={props.index === props.current ? `slide ${'focused'} ${props.animation}` : `slide ${props.animation}`}>
      <img src={props.obj.image} alt="placeholder"></img>
      <h1>{props.obj.header}</h1>
      <p>{props.obj.description}</p>
    </div>
  );
};

export default Slide;