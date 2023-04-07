import { useState, useRef } from "react";

export default function CustomCarousel({ children, gap }) {
  const [positionX, setPositionX] = useState(0);
  const [isPress, setIsPress] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = e => {
    setIsPress(true);
    setPositionX(e.clientX);
    containerRef.current.classList.add(`cursor-grabbing`);
  };
  const handleMouseUp = () => {
    setIsPress(false);
    containerRef.current.classList.remove(`cursor-grabbing`);
  };
  const handleMouseMove = e => {
    if (!isPress) {
      return;
    }
    containerRef.current.scrollLeft += positionX - e.clientX;
    setPositionX(e.clientX);
  };
  return (
    <div
      className={`css-scroll-hide flex whitespace-nowrap overflow-x-auto cursor-grab ${gap}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={containerRef}
    >
      {children}
    </div>
  );
}
