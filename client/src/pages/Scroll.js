import React, { useRef, useState } from 'react';
import i4 from "./i4.jpg"
import "./Scroll.css"

function ScrollableContainer() {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialMouseX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return;
    }

    const distanceDragged = e.clientX - initialMouseX;
    setScrollLeft(prevScrollLeft => prevScrollLeft - distanceDragged);
    setInitialMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClickRight = () => {
    setScrollLeft(prevScrollLeft => prevScrollLeft + 100);
  }

  return (
    <div className="container" onClick={handleClickRight}>
      <div className="content"
        style={{ width: '200%', display: 'flex', position: 'absolute', left: `${scrollLeft}px` }}>
        {/* content goes here */}
        <img src={i4} alt="Example Image" onClick={handleClickRight}/>
        <div className="right-side-content" onClick={handleClickRight}>
        {/* right side content goes here */}
        </div>
      </div>
    </div>
  );
}

export default ScrollableContainer;
