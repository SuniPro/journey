import styled from "@emotion/styled";
import { WheelSlider } from "../component/Slider/WheelSlider";
import { WheelSlideAssets } from "../component/Slider/slideAssets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { DailyTimer } from "../component/DailyTimer/DailyTimer";
import { useTime } from "../context/TimeContext";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { BackgroundManager } from "../component/layouts";

export function Main() {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 overflow-hidden 추가
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 원래 상태로 복원
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Description />
      <LinkList />
      <DailyTimer />
      <WheelSlider
        width={300}
        height={500}
        assets={WheelSlideAssets}
        selectedState={{ selected, setSelected }}
      />
      <BackgroundManager />
    </>
  );
}

function LinkList() {
  return (
    <>
      <Social className="social">
        <a href="https://t.me/SUNI_AIR" target="_blank">
          <svg>
            <use xlinkHref="#ico-telegram"></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/so-sunhyeun-90bb56242/"
          target="_blank"
        >
          <svg>
            <use xlinkHref="#ico-linkedin"></use>
          </svg>
        </a>
        <a href="https://github.com/SuniPro" target="_blank">
          <svg>
            <use xlinkHref="#ico-github"></use>
          </svg>
        </a>
      </Social>

      <svg style={{ display: "none" }}>
        <symbol id="ico-github" viewBox="0 0 35 35">
          <GitHubIcon fontSize="small"></GitHubIcon>
        </symbol>

        <symbol id="ico-linkedin" viewBox="0 0 35 35">
          <LinkedInIcon fontSize="small" />
        </symbol>

        <symbol id="ico-telegram" viewBox="0 0 35 35">
          <TelegramIcon fontSize="small"></TelegramIcon>
        </symbol>
      </svg>
    </>
  );
}

function Description() {
  const { isDay, isTwilight } = useTime();
  return (
    <DescriptionLine
      className="absolute"
      color={isTwilight || isDay ? "#000000" : "#ffffff"}
    >
      <DescriptionBox
        className="absolute bottom-0 left-[30px]"
        color={isTwilight || isDay ? "#000000" : "#ffffff"}
      >
        Welcome
        <br />
        <br />
        This explains Suni's project.
        <br />
        References are listed below.
      </DescriptionBox>
    </DescriptionLine>
  );
}

const DescriptionLine = styled.div<{ color: string }>(
  ({ color }) => css`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 120px;
      width: 10px;
      height: 100%;
      border: 1px solid ${color};
      border-top: none;
      border-bottom: none;
      opacity: 0.15;

      transition: border 1s ease-in-out;
    }
  `,
);

const DescriptionBox = styled.div<{ color: string }>(
  ({ color }) => css`
    position: absolute;
    bottom: 0;
    left: 30px;
    color: ${color};
    transform-origin: 0 10%;
    transform: rotate(-90deg);
    font-size: 14px;
    line-height: 1.4;
    text-transform: uppercase;
    opacity: 0.4;
    transition: color 1s ease-in-out;
  `,
);

const Social = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 25px;
  color: #fff;
  opacity: 0.4;

  a {
    display: inline-block;
    margin-left: 10px;
  }

  svg {
    --fill: #fff;
    width: 35px;
    height: 35px;

    transform: scale(1);

    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
