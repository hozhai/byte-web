"use client";

import { cn } from "@utils";
import React, { useEffect } from "react";

interface RandomBlobProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function RandomBlob(props: RandomBlobProps) {
  const [nums, setNums] = React.useState<number[]>(
    Array.from({ length: 8 }, () => Math.floor(Math.random() * 80 + 10)),
  );
  const [loaded, setLoaded] = React.useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNums(
        Array.from({ length: 8 }, () => Math.floor(Math.random() * 80 + 10)),
      );
    }, 2000);

    setLoaded(true);

    return () => clearInterval(interval);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <div
      style={{
        ...props.style,
        borderRadius: `${nums[0]}% ${nums[1]}% ${nums[2]}% ${nums[4]}% / ${nums[5]}% ${nums[6]}% ${nums[7]}%`,
      }}
      className={cn(props.className, "transition-all duration-1000")}
    >
      {props.children}
    </div>
  );
}
