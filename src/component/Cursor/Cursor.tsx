import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTime } from "../../context/TimeContext";

export function Cursor() {
  // const { isPointer, isLike, isVideo } = useCursor();
  // const isPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const { isDawn, isNight } = useTime();

  useEffect(() => {
    const animateCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !dotRef.current) return;

      dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", animateCursor);

    return () => {
      window.removeEventListener("mousemove", animateCursor);
    };
  }, []);

  // const CursorSelector = () => {
  //   if (isVideo) {
  //     return <></>;
  //   } else if (isPointer && !isPhone) {
  //     return <PointerCursor />;
  //   } else if (isLike) {
  //     return <FavoriteCursor />;
  //   } else {
  //     return <DefaultCursor />;
  //   }
  // };

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

// const StyledCursor = styled.div`
//   position: absolute;
//   pointer-events: none;
//   z-index: 9999;
//   top: 0;
//   left: 0;
//   transform: translate(-50%, -50%);
// `;
//
// function PointerCursor() {
//   return (
//     <CursorCircle width={40} height={40}>
//       <CursorDot width={2} height={2}></CursorDot>
//     </CursorCircle>
//   );
// }
//
// function FavoriteCursor() {
//   return (
//     <CursorCircle width={40} height={40}>
//       <CursorDot width={2} height={2}></CursorDot>
//     </CursorCircle>
//   );
// }
//
// function DefaultCursor() {
//   return (
//     <CursorCircle width={40} height={40}>
//       <CursorDot width={2} height={2}></CursorDot>
//     </CursorCircle>
//   );
// }

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
    z-index: 10;
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

    //z-index: 9999;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
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
    z-index: 10;
    width: ${width}px;
    height: ${height}px;
    border-radius: 50%;
    border: 1px solid ${color};
    margin: calc(-${height / 2}px) 0 0 calc(-${width / 2}px);
    pointer-events: none;
    display: block;

    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    transition: border 1s ease-in-out;
  `,
);
