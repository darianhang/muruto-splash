"use client";

import { ALT_COLOR, ALT_COLOR_DARK, ALT_COLOR_LIGHT } from "@/utilities/consts";
import { useFollowPointer } from "@/utilities/follow-pointer";
import React from "react";

export function StarsCircles({ disablePointer = false }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <Star
        x={x}
        y={y}
        {...(!disablePointer ? { ref: ref } : {})}
        color={ALT_COLOR}
        top={100}
        left={50}
      />
      <Circle
        x={x}
        y={y}
        color={ALT_COLOR_LIGHT}
        top={440}
        size={55}
        left={0}
      />
      <Star x={x} y={y} color={ALT_COLOR_DARK} top={460} size={35} left={380} />
      <Star
        x={x}
        y={y}
        color={ALT_COLOR_LIGHT}
        top={600}
        size={35}
        left={-70}
      />
      <Circle x={x} y={y} color={ALT_COLOR_LIGHT} top={600} left={550} />
      <Circle
        x={x}
        y={y}
        color={ALT_COLOR_LIGHT}
        top={180}
        left={410}
        size={65}
      />
      <Circle
        x={x}
        y={y}
        color={ALT_COLOR_DARK}
        top={670}
        left={150}
        size={25}
      />
      <Star x={x} y={y} color={ALT_COLOR} top={500} left={700} />
    </>
  );
}

interface SVGProps {
  color: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
  x?: number;
  y?: number;
}

const Star = React.forwardRef<HTMLDivElement, SVGProps>(function Star(
  { color, top, bottom, left, right, size = 40, x, y },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top,
        left,
        bottom,
        right,
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 1s ease-out",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0859 8.50266L12.0001 2.25L8.9142 8.50266L2.01398 9.50532L7.00702 14.3723L5.82833 21.2447L12.0001 18L18.1718 21.2447L16.9931 14.3723L21.9862 9.50532L15.0859 8.50266ZM18.7627 10.5527L14.0898 9.87367L12.0001 5.63933L9.9103 9.87367L5.23742 10.5527L8.61875 13.8487L7.82052 18.5027L12.0001 16.3053L16.1796 18.5027L15.3814 13.8487L18.7627 10.5527Z"
          fill={color}
        />
      </svg>
    </div>
  );
});

const Circle = React.forwardRef<HTMLDivElement, SVGProps>(function Circle(
  { color, top, bottom, left, right, size = 40, x, y },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top,
        left,
        bottom,
        right,
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        width={size}
        height={size}
        viewBox="0 0 32 32"
      >
        <path d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z" />
      </svg>
    </div>
  );
});
