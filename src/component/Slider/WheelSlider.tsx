/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Dispatch, type ReactNode, SetStateAction } from "react";
import { css, useTheme } from "@emotion/react";
import { useCarouselGesture } from "../../hooks/useCarouselGesture";
import { WheelSlideAssetType } from "./slideAssets";
import {useNavigate} from "react-router-dom";

export function WheelSlider(props: {
  width: number;
  height: number;
  assets: WheelSlideAssetType[];
  selectedState: {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  };
}) {
  const { width, height, assets, selectedState } = props;

  const { activeIndex, dragBind, wheelBind } = useCarouselGesture(
    assets.length,
  );

  return (
    <div
      {...wheelBind()}
      {...dragBind()}
      className="relative z-[1] h-[100vh] pointer-events-none"
    >
      {assets.map((asset, index) => (
        <SliderItem
          key={asset.num}
          slide={asset}
          width={width}
          height={height}
          size={assets.length}
          index={index}
          activeIndex={activeIndex}
          selectedState={selectedState}
        />
      ))}
    </div>
  );
}

export function SliderItem(props: {
  slide: WheelSlideAssetType;
  width: number;
  height: number;
  size: number;
  index: number;
  activeIndex: number;
  children?: ReactNode;
  selectedState: {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  };
}) {
  const { slide, width, height, index, size, activeIndex, selectedState } =
    props;
  const { title, num, img, link } = slide;
  const { setSelected } = selectedState;

  const theme = useTheme();

  const navigate = useNavigate();

  const zIndex = size - Math.abs(index - activeIndex);
  const distance = index - activeIndex;
  const x = distance * 80;
  const y = distance * 20;
  const rot = distance * 12;
  const opacity = Math.max(0, 1 - Math.abs(distance) * 0.2);

  const pageMove = () => {
    if (link) {
      if (link.includes("https")) {
        window.open(link);
      } else {
       navigate(link);
      }
    }
  }

  return (
    <Item
      x={x}
      y={y}
      zIndex={zIndex}
      rot={rot}
      width={width}
      height={height}
      active={size === zIndex}
      onClick={pageMove}
    >
      <ItemBox opacity={opacity} onClick={() => setSelected(title)}>
        <div
          className="absolute left-5 bottom-5 text-white text-lg font-bold z-[1]"
          css={css`
            font-size: clamp(20px, 3vw, 30px);
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
            transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
            opacity: ${opacity};
            font-family: ${theme.mode.font.main.component.description};
          `}
        >
          {title}
        </div>

        <div
          className="absolute left-5 top-[10px] text-white z-[1]"
          css={css`
            font-size: clamp(20px, 10vw, 80px);
            transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
            opacity: ${opacity};
            font-family: ${theme.mode.font.main.component.description};
          `}
        >
          {num}
        </div>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover pointer-events-none"
        />
      </ItemBox>
    </Item>
  );
}

const Item = styled.div<{
  width: number;
  height: number;
  zIndex: number;
  x: number;
  y: number;
  rot: number;
  active: boolean;
}>(
  ({ width, height, zIndex, x, y, rot }) => css`
    background: none;
    width: clamp(${width - 50}px, 30vw, ${width + 100}px);
    height: clamp(${height - 100}px, 40vw, ${height + 100}px);
    overflow: hidden;
    position: absolute;
    z-index: ${zIndex};
    margin: calc(clamp(${height - 100}px, 40vw, ${height + 100}px) * -0.5) 0 0
      calc(clamp(${width - 50}px, 30vw, ${width + 100}px) * -0.5);
    border-radius: 10px;
    top: 50%;
    left: 50%;
    user-select: none;
    transform-origin: 0 100%;
    box-shadow: 0 10px 50px 10px rgba(0, 0, 0, 0.5);
    pointer-events: all;
    transform: translate(${x}%, ${y}%) rotate(${rot}deg);
    transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);

    &:hover {
      transform: translate(${x - 2}%, ${y}%) rotate(${rot}deg) scale(1.03);
    }
  `,
);

const ItemBox = styled.div<{ opacity: number }>(
  ({ opacity }) => css`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
    font-family: "Orelo-sw-db", serif;
    opacity: ${opacity};

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(177, 170, 170, 0.51),
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0) 60%,
        rgba(184, 184, 184, 0.51)
      );
    }
  `,
);
