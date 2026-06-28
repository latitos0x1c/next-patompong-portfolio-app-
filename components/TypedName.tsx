"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  /** Words/strings to cycle through */
  strings?: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  /** Loop through strings. Defaults to true only when multiple strings provided. */
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
}

/**
 * TypedText — renders a Typed.js typewriter effect.
 * Must be a Client Component because it uses useEffect + DOM refs.
 */
export default function TypedText({
  strings = ["Patompong"],
  className = "gradient-text",
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 2500,
  startDelay = 400,
  loop,
  showCursor = true,
  cursorChar = "|",
}: TypedTextProps) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const typed = new Typed(elRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      startDelay,
      loop: loop ?? strings.length > 1,
      showCursor,
      cursorChar,
    });

    return () => typed.destroy();
  }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop, showCursor, cursorChar]);

  return <span ref={elRef} className={className} />;
}
