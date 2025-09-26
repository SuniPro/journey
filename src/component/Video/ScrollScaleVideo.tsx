/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import advertisement from "../../assets/video/apple-ipad.mp4";
import { css } from "@emotion/react";

export function ScrollScaleVideo(props: { windowWidth: number }) {
  const { windowWidth } = props;
  const maxWidth = windowWidth;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  // 조정 가능한 매개변수들
  const MAX_SCALE = 1.18;
  const SCALE_START_POINT = 0.3;
  const DESCRIPTION_SHOW_SCALE = 1.1;

  const [conatinerScale, setConatinerScale] = useState(1);

  const [scale, setScale] = useState(MAX_SCALE);
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);
  const [descriptionTranslateY, setDescriptionTranslateY] = useState("-10%");

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (!wrapperElement) return;

    const handleScroll = () => {
      const { top, height } = wrapperElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // [수정] 효과 범위 계산 (시작점과 끝점을 반대로 적용)
      const startPoint = viewportHeight * 1; // 화면 상단 20% 지점에서 시작
      const endPoint = -height * SCALE_START_POINT; // 요소가 화면 위로 30% 나갔을 때 끝

      // [수정] 진행도 계산 (1 → 0)
      const progress = Math.min(
        1,
        Math.max(0, (top - startPoint) / (endPoint - startPoint)),
      );

      const newScale = 1 + (MAX_SCALE - 1) * (1 - progress);
      const newContainerScale = 1 + (MAX_SCALE - 1) * (1 - progress);
      setScale(newScale);
      setConatinerScale(newContainerScale);

      // 설명문 애니메이션
      if (newScale <= DESCRIPTION_SHOW_SCALE) {
        const opacityProgress =
          (DESCRIPTION_SHOW_SCALE - newScale) / (DESCRIPTION_SHOW_SCALE - 1);
        const newOpacity = Math.min(1, Math.max(0, opacityProgress));
        setDescriptionOpacity(newOpacity);
        setDescriptionTranslateY(`-${10 * (1 - opacityProgress)}%`);
      } else {
        setDescriptionOpacity(0);
        setDescriptionTranslateY("-10%");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <VideoWrapper
        ref={wrapperRef}
        css={css`
          margin: 0 auto;
        `}
        scale={conatinerScale}
      >
        <VideoScaleContainer scale={scale}>
          <video
            width="100%"
            src={advertisement}
            controls={false}
            autoPlay
            muted
            loop
            css={css`
              display: block;
              width: 100%;
              height: auto;
              object-fit: cover;
            `}
          />
        </VideoScaleContainer>
      </VideoWrapper>

      <DescriptionContainer
        opacity={descriptionOpacity}
        translateY={descriptionTranslateY}
        ref={descriptionRef}
        maxWidth={maxWidth}
      >
        <ContentsTitle></ContentsTitle>
        <DescriptionText>
          <span>Scroll, Move, Scale</span>
          <div>
            <span>Scroll once. Everything transforms.</span>
          </div>
        </DescriptionText>
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoWrapper = styled.div<{ scale: number }>(
  ({ scale }) => css`
    width: 100%;
    overflow: hidden;
    transform: ${`scale(${scale})`};
    transform-origin: center;
    will-change: transform;
    transition: transform 0.1s linear;
    border-radius: 8px;
  `,
);

const VideoScaleContainer = styled.div<{ scale: number }>(
  ({ scale }) => css`
    transform: ${`scale(${scale})`};
    transform-origin: center top;
    will-change: transform;
    transition: transform 0.1s linear;
    overflow: hidden;
  `,
);

const DescriptionContainer = styled.div<{
  opacity: number;
  translateY: string;
  maxWidth: number;
}>(
  ({ opacity, translateY, maxWidth }) => css`
    opacity: ${opacity};
    transform: translateY(${translateY});
    transition: all 0.3s ease-out;
    text-align: center;
    margin: 5vh 0 15vh;
    width: 100%;
    max-width: ${maxWidth}px;
  `,
);

const ContentsTitle = styled.h1`
  font-size: clamp(24px, 3vw, 48px);
  font-weight: bold;
  margin-bottom: 3vh;
`;

const DescriptionText = styled.div(
  (theme) => css`
    margin: 2vh 0;
    text-align: center;
    font-size: clamp(23px, 3vw, 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.theme.mode.font.component.title};

    @media ${theme.theme.deviceSize.phone} {
      font-size: clamp(23px, 3vw, 32px);
    }

    & > span {
      margin: 2vh 0;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
);
