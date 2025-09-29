import styled from "@emotion/styled";
import React, { ReactNode, useMemo } from "react";
import { Tooltip } from "@heroui/react";
import { css, useTheme } from "@emotion/react";
import { MoonIcon } from "../icons/Icons";
import { addMinutes, formatTime } from "../tools/TimeTools";
import { useTime } from "../../context/TimeContext";
import { lerpColor } from "../tools/ColorTools";

export function DailyTimer() {
  const theme = useTheme();

  const { time, setTime, timezone } = useTime();

  const handleWheel = ({ deltaY }: React.WheelEvent) => {
    setTime((prev) => addMinutes(prev, deltaY < 0 ? 1 : -1));
  };

  return (
    <>
      <Tooltip content={timezone}>
        <TimerBox
          time={time}
          onWheel={(e: React.WheelEvent) => handleWheel(e)}
          color={theme.colors.honeyHaze}
        />
      </Tooltip>
    </>
  );
}

export function TimerBox(props: {
  time: number;
  onWheel: React.WheelEventHandler;
  color: string;
}) {
  const { time, onWheel } = props;

  const theme = useTheme();

  const gradient = useMemo(() => {
    const mins = Math.floor(time / 100) * 60 + (time % 100);

    // 색상 기준
    const dayFrom = "#ec4899"; // pink-500
    const dayTo = "#facc15"; // yellow-500
    const nightFrom = "#463f9c";
    const nightTo = "#7600b1";

    // 새벽 (04:30 ~ 06:30)
    if (mins >= 270 && mins <= 390) {
      const t = (mins - 270) / 120;
      return `linear-gradient(to top right, ${lerpColor(
        nightFrom,
        dayFrom,
        t,
      )}, ${lerpColor(nightTo, dayTo, t)})`;
    }

    // 황혼 (16:30 ~ 18:30)
    if (mins >= 990 && mins <= 1110) {
      const t = (mins - 990) / 120;
      return `linear-gradient(to top right, ${lerpColor(
        dayFrom,
        nightFrom,
        t,
      )}, ${lerpColor(dayTo, nightTo, t)})`;
    }

    // 밤
    if (mins < 390 || mins > 1080) {
      return `linear-gradient(to top right, ${nightFrom}, ${nightTo})`;
    }

    // 낮
    return `linear-gradient(to top right, ${dayFrom}, ${dayTo})`;
  }, [time]);

  return (
    <TimerBoxContainer onWheel={onWheel} gradient={gradient}>
      <IconCover color={theme.colors.honeyHaze} child={<MoonIcon />} />
      <span>{formatTime(time)}</span>
    </TimerBoxContainer>
  );
}

const TimerBoxContainer = styled.div<{ gradient: string }>(
  ({ gradient }) => css`
    position: absolute;
    top: 4%;
    right: 2%;
    width: 120px;
    height: 40px;
    border-radius: 12px;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    background: ${gradient};
    transition: background 1.5s ease-in-out;

    font-size: 12px;
  `,
);

function IconCover(props: { child: ReactNode; color: string }) {
  const { color, child } = props;
  return <StyledIcon color={color}>{child}</StyledIcon>;
}

const StyledIcon = styled.div<{ color: string }>(
  ({ color }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;

    svg {
      width: 24px;
      height: 24px;

      color: ${color};

      fill: ${color};
    }
  `,
);
