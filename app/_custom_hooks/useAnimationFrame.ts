import { useRef, useEffect } from 'react';

export default function useAnimationFrame(callback) {
  // Use useRef for mutable variables that we ant to persist
  // without triggering a re-render on theire change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime, requestRef.current)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);			// Make sure the effect runs only
				// once.
}
