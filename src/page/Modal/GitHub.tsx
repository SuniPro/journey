import { Container, Description, Language } from "./Base";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

export function GitHub(props: { language: Language; link?: string }) {
  const { language, link } = props;
  const components = {
    en: <EnVersion />,
    jp: <JpVersion />,
    kr: <KrVersion />,
  };

  return (
    <>
      <Container>
        <ContentsContainer>
          <Button
            sx={{ width: "94%", zIndex: "0" }}
            variant="contained"
            onClick={() => window.open(link)}
          >
            Move to Page
          </Button>
        </ContentsContainer>
        {components[language as Language]}
      </Container>
    </>
  );
}

function EnVersion() {
  const theme = useTheme();
  return (
    <>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Description</ContentsTitle>
        <Description>
          <span className="text-2xl">
            This page is for the GitHub link.
            <br />
            On GitHub, you can find everything from the server API to the client
            code.
            <br />
            Please check the tech stack and projects on the main page and in the
            library :)
          </span>
        </Description>
      </ContentsContainer>
    </>
  );
}

function JpVersion() {
  const theme = useTheme();
  return (
    <>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Description</ContentsTitle>
        <Description>
          <span className="text-2xl">
            このページは GitHub リンクのためのページです。
            <br />
            GitHub にはサーバー API
            をはじめ、クライアントコードまで全て保存されています。
            <br />
            メインページやライブラリで、技術スタックや制作物をご確認ください :)
          </span>
        </Description>
      </ContentsContainer>
    </>
  );
}

function KrVersion() {
  const theme = useTheme();
  return (
    <>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Description</ContentsTitle>
        <Description>
          <span className="text-2xl">
            이 페이지는 Github 링크를 위한 페이지 입니다.
            <br />
            깃허브에는 서버 API를 포함해서 클라이언트 코드까지 모두 저장되어
            있습니다.
            <br />
            메인 페이지와 라이브러리에서 기술스택과 작업물들을 확인해보세요 :)
            <br />
          </span>
        </Description>
      </ContentsContainer>
    </>
  );
}
