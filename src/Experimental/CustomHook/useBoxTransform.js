import { useEffect } from 'react';

const useBoxTransform = (boxRef, isActive, setIsActive) => {
  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      const handleMouseMove = (e) => {
        if (isActive) {
          const rect = boxElement.getBoundingClientRect();
          const x = e.clientX - rect.left; 
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const deltaX = x - centerX;
          const deltaY = y - centerY;
          const rotateX = deltaY / rect.height;
          const rotateY = deltaX / rect.width;
          boxElement.style.transform = `rotateX(${rotateX * 15}deg) rotateY(${rotateY * 15}deg)`;
        }
      };

      const handleMouseLeave = () => {
        boxElement.style.transform = '';
        setIsActive(false);
      };

      const handleClick = () => {
        setIsActive(true);
      };

      boxElement.addEventListener('mousemove', handleMouseMove);
      boxElement.addEventListener('mouseleave', handleMouseLeave);
      boxElement.addEventListener('click', handleClick);

      return () => {
        boxElement.removeEventListener('mousemove', handleMouseMove);
        boxElement.removeEventListener('mouseleave', handleMouseLeave);
        boxElement.removeEventListener('click', handleClick);
      };
    }
  }, [isActive, setIsActive, boxRef]);
};

export default useBoxTransform;
