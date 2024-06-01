import React, { useEffect } from 'react';

function BackgroundCircles() {
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.width = `${Math.random() * 100 + 50}px`;
      circle.style.height = circle.style.width;
      circle.style.left = `${Math.random() * window.innerWidth}px`;
      circle.style.top = `${Math.random() * window.innerHeight}px`;

      document.body.appendChild(circle);
    }
  }, []);

  return null;
}

export default BackgroundCircles;
