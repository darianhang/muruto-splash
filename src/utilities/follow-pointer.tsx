"use client";

import { useState, RefObject, useEffect } from "react";

/**
 * Hook to animate feature image parralax follow on mouse movement
 * @param ref
 * @returns
 */

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  if (!ref) return { x: 0, y: 0 };
  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      const offset = 125;
      const x = (clientX - element.offsetLeft) / offset - 10;
      const y = (clientY - element.offsetTop) / offset;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return point;
}
