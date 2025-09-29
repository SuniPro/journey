import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTime } from "../../context/TimeContext";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const { isDawn, isNight } = useTime();

  useEffect(() => {
    const animateCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !dotRef.current) return;

      cursorRef.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
      dotRef.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    };

    window.addEventListener("mousemove", animateCursor);

    return () => {
      window.removeEventListener("mousemove", animateCursor);
    };
  }, []);

  return (
    <>
      <CursorCircle
        ref={cursorRef}
        width={40}
        height={40}
        color={isDawn || isNight ? "#8a8a8a" : "#353535"}
      />
      <CursorDot
        color={isDawn || isNight ? "#8a8a8a" : "#353535"}
        ref={dotRef}
        width={2}
        height={2}
      ></CursorDot>
    </>
  );
}

const CursorCircle = styled.div<{
  width: number;
  height: number;
  color: string;
}>(
  ({ width, height, color }) => css`
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: "Roboto", serif;
    position: absolute;
    z-index: 2000;
    //top: 0;
    //left: 0;
    width: ${width}px;
    height: ${height}px;
    border-radius: 50%;
    border: 1px solid ${color};
    margin: calc(-${height / 2}px) 0 0 calc(-${width / 2}px);
    transition:
      transform 0.85s cubic-bezier(0, 0.02, 0, 1),
      border 1s ease-in-out;
    pointer-events: none;
    display: block;

    top: 0;
    left: 0;
  `,
);

const CursorDot = styled.div<{
  width: number;
  height: number;
  color: string;
}>(
  ({ width, height, color }) => css`
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: "Roboto", serif;
    position: absolute;
    z-index: 2000;
    width: ${width}px;
    height: ${height}px;
    border-radius: 50%;
    border: 1px solid ${color};
    margin: calc(-${height / 2}px) 0 0 calc(-${width / 2}px);
    pointer-events: none;
    display: block;

    top: 0;
    left: 0;
    transition: border 1s ease-in-out;
  `,
);
