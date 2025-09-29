import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useWindowResponsiveHeight } from "../../hooks/useSizeHook";
import { useWindowContext } from "../../context/WindowContext";
import styled from "@emotion/styled";
import { NetflixCardFlip } from "./CardFlip";
import { NetflixContents } from "../Netflix/NetflixContentsDescription";

import innerCasino from "../../assets/image/netflix/inner_casino.jpg"
import casinoLounge from "../../assets/image/netflix/casino_lounge.jpg"
import poker from "../../assets/image/netflix/poker.jpg"
import redCasino from "../../assets/image/netflix/red_casino.jpg"
import pokerLight from "../../assets/image/netflix/poker_light.jpg"

import porkerVideo from "../../assets/video/poker_video.mp4";

export function NetflixStyleCardFlip() {

    const [videoShownIndex, setVideoShownIndex] = useState<number | null>(0);
    const [videoFadingOut, setVideoFadingOut] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const flipRef = useRef<HTMLDivElement>(null);

    const { windowWidth } = useWindowContext();

    const responsiveHeight = useWindowResponsiveHeight(0.36501, 189.993);

    useEffect(() => {
        setVideoShownIndex(selectedIndex);
        setVideoFadingOut(false);

        const timer = setTimeout(() => {
            setVideoFadingOut(true); // fade 시작

            // fade 시간 후 비디오 제거
            setTimeout(() => {
                setVideoShownIndex(null);
                setVideoFadingOut(false);
            }, 800); // <- transition 시간과 동일
        }, 5000);

        return () => clearTimeout(timer); // index 바뀌면 기존 타이머 정리
    }, [selectedIndex, windowWidth]);
    
    const childList = NetflixContents([innerCasino, casinoLounge, poker, redCasino, pokerLight], windowWidth, selectedIndex, videoShownIndex, videoFadingOut, porkerVideo);
    
    return <FlipContainer ref={flipRef} height={responsiveHeight}>
        <NetflixCardFlip
            nodeList={childList}
            maxWidth={windowWidth}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
        />
    </FlipContainer>
}

const FlipContainer = styled.div<{ height: number }>(
    ({ height }) => css`
    width: 100%;
    height: ${height}px;
    justify-content: flex-start;
    position: relative;
    overflow: visible;
  `,
);
