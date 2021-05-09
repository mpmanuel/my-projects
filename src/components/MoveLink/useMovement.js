import React, { useEffect, useState } from 'react';

export default function useMovement() {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    function handleKeyDown(e) {
      console.log(e.keyCode, e);
      if (e.key === 'ArrowUp') move('up')
      if (e.key === 'ArrowDown') move('down')
      if (e.key === 'ArrowLeft') move('left')
      if (e.key === 'ArrowRight') move('right')
    }

    return () => window.removeEventListener('keydown', handleKeyDown); 
  },[]);

  function move(dir) {
    setDirection(dir);
    if (dir === 'up') setY(y => y - 20);
    if (dir === 'down') setY(y => y + 20);
    if (dir === 'left') setX(x => x - 20);
    if (dir === 'right') setX(x => x + 20);
  }

  return { x, y, direction, move};
}