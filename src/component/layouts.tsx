import styled from "@emotion/styled";
import { css, Global, useTheme } from "@emotion/react";
import { useTime } from "../context/TimeContext";
import { useMemo } from "react";
import { lerpColor } from "./tools/ColorTools";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/** @param: width => number 타입을 받아 vw 단위로 width를 결정합니다.
 *  @param: gap => gap 타입을 받아 vw 단위로 width를 결정합니다.
 * :*/
export const PageContainer = styled.div<{
  width: number;
  gap?: number;
}>(
  ({ width, gap = 1 }) => css`
    width: ${width}vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${gap}vw;
    box-sizing: border-box;
  `,
);

export const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function GlobalStyled() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        width: 100%;
        position: relative;

        z-index: -1;
        background-color: ${theme.mode.bodyBackground};

        html {
          font-size: 1vw;

          ::-webkit-scrollbar {
            display: none;
          }
        }

        * {
          cursor: none !important;
        }

        symbol {
          cursor: none;
        }

        body {
          width: 100%;
          box-sizing: border-box;

          ::-webkit-scrollbar {
            display: none;
          }
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
}

export function BackgroundManager() {
  const { time } = useTime();

  const gradient = useMemo(() => {
    const mins = Math.floor(time / 100) * 60 + (time % 100);

    // Dawn: 04:30 (270) ~ 06:30 (390)
    if (mins >= 270 && mins <= 390) {
      const t = (mins - 270) / 120; // 0 to 1 over 2 hours
      return `linear-gradient(135deg, ${lerpColor("#442f81", "#fffdee", t)}, ${lerpColor("#240032", "#ebd86f", t)})`;
    }

    // Twilight: 16:30 (990) ~ 18:30 (1110)
    if (mins >= 990 && mins <= 1110) {
      const t = (mins - 990) / 120; // 0 to 1 over 2 hours
      return `linear-gradient(135deg, ${lerpColor("#fffdee", "#442f81", t)}, ${lerpColor("#ebd86f", "#240032", t)})`;
    }

    // Night
    if (mins < 390 || mins > 1080) {
      return "linear-gradient(135deg, #442f81, #240032)";
    }

    // Day
    return "linear-gradient(135deg, #fffdee, #ebd86f)";
  }, [time]);

  return <BackgroundLayer style={{ background: gradient }} />;
}

const BackgroundLayer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: background 1.2s ease-in-out;
`;
