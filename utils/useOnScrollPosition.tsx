import React from 'react';

export default function useOnScrollPosition(
  y: number,
  dis?: boolean,
  def?: boolean
) {
  if (dis) return def;
  const [reachedPosition, setReachedPosition] = React.useState(false);

  React.useEffect(() => {
    const updatePosition = () => {
      if (window.pageYOffset >= y) {
        setReachedPosition(true);
      } else {
        setReachedPosition(false);
      }
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return reachedPosition;
}
