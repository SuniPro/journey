import { Container, Description, Language } from "./Base";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

export function Anycast(props: { language: Language; link?: string }) {
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
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Anycast is a video streaming platform. <br />
            It allows users to watch videos from multiple platforms such as SOOP
            and Chzzk by entering a video URL, and also supports recording.{" "}
            <br />
            Users can even designate specific streamers to automatically record
            their live streams. <br />
            The client was built using React, and the server was developed with
            Java Spring Boot 3. <br />
            CI/CD follows a GitHub Actions → Docker → Jenkins → EC2 pipeline
            structure.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            This was a solo project — I handled all stages of planning, design,
            and development by myself.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Watch Video
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Users can watch videos immediately by entering the video URL.
            </li>
            <li className="pb-2">
              Live streaming playback works by continuously fetching and
              displaying real-time TS (Transport Stream) segments. <br />
              For platforms such as Chzzk, the TS segments can be directly
              retrieved by the client, enabling smooth playback without any
              special configuration.
            </li>
            <li className="pb-2">
              However, in the case of SOOP, videos are restricted to playback
              only within their own platform. <br />
              Therefore, a proxy process on the server is required to fetch and
              relay those video segments.
            </li>
            <li className="pb-2">
              The server receives all TS segment URLs, proxies them, and
              recursively sends them back to the client via HLS.js for playback.
              <br />
              This setup allows users to stream SOOP videos seamlessly through
              the Anycast interface.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            REC (Recording)
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The recording feature merges all TS segments into a single video
              file, encodes it into the desired format, and uploads it to AWS
              S3. <br />
              Users can then view and download their recorded videos.
            </li>
            <li className="pb-2">
              Encoding is executed on the Java server using{" "}
              <strong>ffmpeg</strong>. <br />
              The server is preconfigured with ffmpeg, and video encoding is
              implemented through the <strong>bramo.ffmpeg</strong> library.
            </li>
          </ul>
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
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Anycast は動画ストリーミングプラットフォームです。
            <br />
            SOOP や Chzzk など各動画プラットフォームの動画 URL
            を入力することで視聴でき、録画機能も備えています。
            <br />
            特定の配信者を指定して、自動的に動画を常時録画することも可能です。
            <br />
            クライアントは React、サーバーは Java Spring Boot 3 で構築しました。
            <br />
            CI/CD は GitHub Actions → Docker → Jenkins → EC2
            のパイプライン構成です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            企画・デザイン・開発のすべてを一人で担当した単独プロジェクトです。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            動画視聴（Watch Video）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              動画の URL を入力するとすぐに視聴できます。
            </li>
            <li className="pb-2">
              ライブ配信の再生は、リアルタイムで TS（Transport Stream）
              セグメントを取得し、連続的に再生する仕組みです。
              <br />
              Chzzk などのプラットフォームでは TS
              セグメントを直接取得できるため、特別な設定なしでスムーズに再生可能です。
            </li>
            <li className="pb-2">
              一方、SOOP
              は同一プラットフォーム内でのみ視聴可能な設計となっているため、
              サーバーでプロキシ処理を行う必要があります。
            </li>
            <li className="pb-2">
              サーバーはすべての TS
              セグメントのパスを受け取り、プロキシ処理を行い、 HLS.js
              経由でクライアントに再送信します。
              <br />
              これにより、Anycast 上で SOOP
              の動画もシームレスに視聴できるようになっています。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            録画機能（REC）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              録画機能は、取得した TS
              セグメントを結合して希望する動画形式にエンコードし、 AWS S3
              に保存します。
              <br />
              ユーザーは録画済みの動画を確認・ダウンロードすることができます。
            </li>
            <li className="pb-2">
              エンコード処理は Java サーバー上で実行され、{" "}
              <strong>ffmpeg</strong> を使用しています。
              <br />
              サーバーにはあらかじめ ffmpeg がインストールされており、
              <strong>bramo.ffmpeg</strong> ライブラリを利用して実装しました。
            </li>
          </ul>
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
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            anycast는 영상 스트리밍 플랫폼입니다.
            <br />
            SOOP, chzzk 등 각 영상 플랫폼의 영상의 주소를 받아서 시청할 수
            있으며, 이를 녹화할수도 있습니다. 특정 스트리머를 지정해서 영상을
            항상 녹화할 수 있게 할 수도 있습니다.
            <br />
            client는 React, Server는 Java spring3 로 작업하였습니다.
            <br />
            CI-CD는 Git Action - Docker - Jenkins - EC2 Pip line 형태입니다.
            <br />
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            단독 프로젝트였으며, 기획 - 디자인 - 개발 모든 과정을 직접
            수행했습니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Watch video
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              영상의 주소를 입력하면 바로 영상을 시청할 수 있습니다.
            </li>
            <li className="pb-2">
              라이브 스트리밍을 시청할 수 있게 만드는 건 결국 TS 조각을
              실시간으로 받아 사용자가 보게 하는 것입니다.
              <br />
              따라서 다른 플랫폼의 영상이나 chzzk의 경우는 TS 조각을 바로 받을
              수 있게 설계가 되어있어 특별한 문제 없이 TS 조각을 client에
              전달하여 영상을 시청하게 할 수 있습니다.
            </li>
            <li className="pb-2">
              하지만 SOOP의 경우는 좀 다른데 같은 플랫폼에서만 영상 시청이
              가능하게 설계가 되어있어, 이걸 Server에서 다시 proxy 해주는 과정이
              필요합니다.
            </li>
            <li className="pb-2">
              하지만 SOOP의 경우는 좀 다른데 같은 플랫폼에서만 영상 시청이
              가능하게 설계가 되어있어, 이걸 Server에서 다시 proxy 해주는 과정이
              필요합니다.
            </li>
            <li className="pb-2">
              따라서 Server 가 모든 TS 세그먼트들의 경로를 받아 proxy 처리하고
              이걸 다시 서버가 재귀로 받아서 hls js가 시청할 수 있게 다시
              client에 전송하여 시청하게 합니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            REC
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              녹화 기능은 단순하게 모든 TS 조각들을 합쳐 원하는 타입으로 영상을
              인코딩하여 S3에 저장 유저가 녹화된 영상을 확인할 수 있게 합니다.
            </li>
            <li className="pb-2">
              인코딩 작업은 java 에서 실행하며, ffmpeg를 통해서 인코딩할 수
              있도록 미리 서버에 ffmpeg를 설치, bramo.ffmpeg 라이브러리를
              사용하여 구현하였습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
