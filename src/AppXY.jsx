import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [mouse, setMouse] = useState({x : 0, y : 0})

  const handleMouse = (e) => {
    setMouse({x : e.clientX, y: e.clientY});
  }

  return (
    <div className='container' onMouseMove={handleMouse} >
      <div className='pointer' style ={{
      transform : `translate(${mouse.x}px, ${mouse.y}px)`
    }} />
    </div>
  );
}