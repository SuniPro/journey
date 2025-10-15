/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Fragment, ReactNode } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { FuncItem } from "../Button/Button";
import EvolutionLogo from "../../assets/image/brand/evolution_logo.svg";

export function NetflixContents(
  imageList: string[],
  maxWidth: number,
  selectedIndex: number,
  videoShownIndex: number | null,
  videoFadingOut: boolean,
  video: string,
): ReactNode[] {
  const theme = useTheme();

  return imageList.map((image, index) => (
    <Fragment key={index}>
      <div
        css={css`
          width: 100%;
          max-width: ${maxWidth}px;
          height: 100%;
          isolation: isolate;
        `}
      >
        {selectedIndex === index || videoShownIndex === index ? (
          <>
            <div
              css={css`
                position: absolute;
                top: 10%;
                left: 6%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                z-index: 2;
              `}
            >
              <img
                css={css`
                  width: 12vw;
                  height: 5vh;
                  filter: invert(100%);
                `}
                src={EvolutionLogo}
                alt="logo"
              />
            </div>
            <div
              css={css`
                position: absolute;
                bottom: 24%;
                left: 6%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                color: #ffffff;
                gap: 1vh;
                z-index: 2;
              `}
            >
              <Title theme={theme}>EVOLUTION GAMING</Title>
              <Description theme={theme}>
                A Evolution gaming is most famous Live Casino provider in the
                World
                <br />
                <br />
                This casino, with its player-focused gaming tables,
                <br />
                will offer you an ecstatic day.
                <br />
                <br />
                Ready to find your ecstasy at this casino?
              </Description>
            </div>
            <div
              css={css`
                position: absolute;
                bottom: 10%;
                left: 6%;

                display: flex;
                flex-direction: column;
                gap: 1vh;
                z-index: 2;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-content: center;
                  gap: 1vw;
                `}
              >
                <StyledButton
                  label="DEMO"
                  func={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  backgroundColor={theme.mode.buttonIsActiveBackground}
                  color="#ffffff"
                />
                <StyledButton
                  startIcon={<PlayCircleIcon />}
                  label="PLAY"
                  func={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  backgroundColor={theme.mode.buttonActiveBackground}
                  color="#ffffff"
                />
              </div>
            </div>
          </>
        ) : null}
        {videoShownIndex === index && (
          <video
            autoPlay
            playsInline
            muted
            loop
            src={video}
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: opacity 0.8s ease-in-out;
              opacity: ${videoFadingOut ? 0 : 1};
              pointer-events: none;
            `}
          />
        )}

        {/* 이미지 */}
        <ImageCase
          imageUrl={image}
          theme={theme}
          isActive={index === selectedIndex}
          css={css`
            max-width: ${maxWidth}px;
            width: 100%;
            height: 100%;
          `}
        />
      </div>
    </Fragment>
  ));
}

const Title = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    font-size: 2.4em;
    font-family: ${theme.mode.font.component.title};
    font-weight: 600;
  `,
);

const Description = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    font-size: 1.1em;
    font-family: ${theme.mode.font.component.description};
    font-weight: 500;
  `,
);

const ImageCase = styled.div<{
  theme: Theme;
  imageUrl: string;
  isActive: boolean;
}>(
  ({ theme, imageUrl, isActive }) => css`
    height: 100%;
    background-image: ${isActive
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${imageUrl})`
      : `url(${imageUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${theme.borderRadius.softBox};
  `,
);

const StyledButton = styled(FuncItem, {
  shouldForwardProp: (prop) =>
    !["backgroundColor", "color", "theme"].includes(prop),
})<{
  backgroundColor: string;
  color: string;
}>(
  ({ backgroundColor, color }) => css`
    flex-shrink: 0;
    padding: 4px 20px;
    font-size: 1vw;
    background: ${backgroundColor};
    color: ${color};

    border-radius: 4px;
  `,
);
