/** @jsxImportSource @emotion/react */
import {
  ContentsContainer,
  ContentsTitle,
  PageContainer,
} from "../component/layouts";
import { css, useTheme } from "@emotion/react";
import { useWindowContext } from "../context/WindowContext";
import { useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import styled from "@emotion/styled";
import { AdCardSection } from "../component/AdCardSection";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ScrollScaleVideo } from "../component/Video/ScrollScaleVideo";

export function AppleStyle() {
  const theme = useTheme();

  const { windowWidth } = useWindowContext();

  const scrollRef = useRef<HTMLDivElement>(null);
  const adCardRef = useRef<HTMLDivElement>(null);

  const isDesktop = windowWidth >= theme.windowSize.HD;

  const scrollNext = () => {
    const container = scrollRef.current;
    const card = adCardRef.current;

    if (!container || !card) return;

    const cardWidth = card.clientWidth;
    const gap = 0;

    container.scrollLeft += cardWidth + gap;
  };

  const scrollPrev = () => {
    const container = scrollRef.current;
    const card = adCardRef.current;

    if (!container || !card) return;

    const cardWidth = card.clientWidth;
    const gap = 10;
    container.scrollLeft -= cardWidth + gap;
  };

  return (
    <>
      <PageContainer
        width={windowWidth * 0.9}
        css={css`
          padding: 40px 0;
          box-sizing: border-box;
          color: ${theme.mode.textPrimary};
        `}
      >
        <ContentsContainer>
          <ContentsTitle theme={theme}>What is Apple Card ?</ContentsTitle>
        </ContentsContainer>
        <ContentsContainer
          ref={scrollRef}
          css={css`
            width: 100%;
            align-items: flex-start;
            padding: ${isDesktop ? "1% 2%" : "2%"};
            box-sizing: border-box;
            margin: 0 10%;

            overflow-x: scroll;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;

            -ms-overflow-style: none;

            &::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <AdCardSection ref={adCardRef} />
        </ContentsContainer>
        <ArrowContainer>
          <ArrowCircleLeftIcon
            sx={{ width: 40, height: 40, fill: "white" }}
            onClick={scrollPrev}
          />
          <ArrowCircleRightIcon
            sx={{ width: 40, height: 40, fill: "white" }}
            onClick={() => scrollNext()}
          />
        </ArrowContainer>

        <ContentsContainer>
          <ContentsTitle theme={theme}>How can do this ?</ContentsTitle>
        </ContentsContainer>
        <ContentsContainer>
          <SyntaxHighlighter language="react" className="w-full rounded-md">
            {`
<>
  <CollectionWrapper theme={theme} onClick={() => setOpen(true)} ref={ref}>
    <ImageCase imageUrl={collectionContents.image} theme={theme} />
    <InfoLine isWhite={isWhite}>
      <Title>{collectionContents.title}</Title>
      <div>
        {collectionContents.description.split("\\n").map((line, index) => (
          <Description key={index}>
            {line} <br />
          </Description>
        ))}
      </div>
    </InfoLine>
  </CollectionWrapper>

  <ArrowContainer>
    <ArrowCircleLeftIcon
      sx={{ width: 40, height: 40, fill: "white" }}
      onClick={scrollPrev}
    />
    <ArrowCircleRightIcon
      sx={{ width: 40, height: 40, fill: "white" }}
      onClick={() => scrollNext()}
    />
  </ArrowContainer>
</>;
        `}
          </SyntaxHighlighter>
        </ContentsContainer>
        <ContentsContainer>
          <a
            className="text-lg hover:text-blue-500"
            href="https://github.com/SuniPro/tree/main/src/component/Card"
          >
            Go To More
          </a>
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>What is Apple Video ?</ContentsTitle>
        </ContentsContainer>
        <ContentsContainer
          css={css`
            padding: 4vh 0;
          `}
        >
          <ScrollScaleVideo windowWidth={windowWidth} />
        </ContentsContainer>
        <ContentsContainer>
          <SyntaxHighlighter language="react" className="w-full rounded-md">
            {`
<Container>
  <VideoWrapper
    ref={wrapperRef}
    css={css\`
      margin: 0 auto;
    \`}
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
        css={css\`
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        \`}
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
</Container>;

              `}
          </SyntaxHighlighter>
        </ContentsContainer>
        <ContentsContainer>
          <a
            className="text-lg hover:text-blue-500"
            href="https://github.com/SuniPro/tree/main/src/component/Card"
          >
            Go To More
          </a>
        </ContentsContainer>
      </PageContainer>
    </>
  );
}

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 4%;
  gap: 1vw;
  z-index: 1;

  svg {
    transition: scale 0.4s ease-in-out;

    &:hover {
      scale: 1.1;
    }
  }
`;
