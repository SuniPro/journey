/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import {
  ContentsContainer,
  ContentsTitle,
  PageContainer,
} from "../component/layouts";
import { useWindowContext } from "../context/WindowContext";
import styled from "@emotion/styled";
import { useState } from "react";
import { LanguageButton } from "../component/LanguageButton";

export function Suni() {
  const { windowWidth } = useWindowContext();
  const [language, setLanguage] = useState<"en" | "jp" | "kr">("en");
  const theme = useTheme();

  const languageChange = (lang: "en" | "jp" | "kr") => {
    if (lang === "en") {
      setLanguage("jp");
    } else if (lang === "jp") {
      setLanguage("kr");
    } else if (lang === "kr") {
      setLanguage("en");
    }
  };

  const contents = () => {
    switch (language) {
      case "en":
        return <EngVersion />;
      case "jp":
        return <JpVersion />;
      case "kr":
        return <KrVersion />;
    }
  };

  return (
    <>
      <PageContainer
        className="text-white p-14"
        width={windowWidth * 0.95}
        css={css`
          gap: 20px;
          font-family: ${theme.mode.font.component.title};
        `}
      >
        {contents()}
      </PageContainer>
      <LanguageButton
        language={language}
        change={() => languageChange(language)}
      ></LanguageButton>
    </>
  );
}

const Description = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;

    gap: 10px;

    font-weight: 300;
    font-family: ${theme.mode.font.component.description};
  `,
);

function EngVersion() {
  const theme = useTheme();
  return (
    <>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Who ?</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Self-Introduction</ContentsTitle>
        <Description>
          <span className="text-2xl">
            I prefer not to simply follow existing code patterns but to explore
            and apply new technologies and solutions. <br />I also have
            extensive experience refactoring these solutions to align with a
            company’s development philosophy and building them into internal
            open-source tools.
            <br /> <br />
            For example, while working on the Nexus Community and the JP app, I
            encountered caching issues with Next.js 12 fetch requests and base
            URL configuration problems. <br />
            <br />
            To solve this, I independently developed and distributed a custom
            library, customFetchBase, which handled response/request processing,
            base URL setup, and interceptors, making it available for internal
            use.
            <br /> During the development of the JP app, I also started creating
            an open-source solution to make it easier to implement Light Mode
            and Dark Mode, which had not existed before in the project. As a
            developer, I constantly strive to master and refine the use of
            cutting-edge technologies.
            <br /> I always ask myself questions like, "How can I make this code
            more readable?" or "How can I make it more efficient?" — this
            mindset defines me not just as a coder but as a true developer.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Education</ContentsTitle>
        <Description>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              KAIST RESEARCH: Science Talent Education Program
            </li>
            <li className="pb-2">
              Soongsil University: Major in Business Administration
            </li>
            <li className="pb-2">
              Franklin University Switzerland: Major in AI & Big Data
            </li>
          </ul>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Professional Experience</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2016 – 2019 | Military Service
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Participated in the MIMS (Military Intelligence Management System)
              and SIMS (Signal Information Analysis Program) projects, gaining
              hands-on experience in Java and React.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2022 – 2023 | Team Lead, Development Team 2 | Klim Solutions
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Joined as a team lead, leveraging my military development
              experience.
            </li>
            <li className="pb-2">
              Led the Belleforet Hybrid App development project.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Jun 2023 – Jun 2024 | Senior Developer | Nexus (UBase Subsidiary)
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Transitioned to Nexus due to Klim Solutions’ insistence on legacy
              eGov frameworks.
            </li>
            <li className="pb-2">
              Led projects including U Analysis and U Rms, handling the entire
              front-end development for U Rms independently.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Jun 2024 – Sep 2024 | Front-End Developer | Team Monolith
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Joined to develop a Digital Textbook platform after being invited
              by Team Monolith.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Sep 2024 – Jan 2025 | Full-Stack Developer | StyleLeader
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Contributed to the StyleLeader site development while attending
              overseas training.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Dec 2024 – Present | Front-End Developer | JP (Travel Review SNS)
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Currently developing a Google Maps–based travel review social
              networking app, scheduled to launch in mid-January.
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
        <ContentsTitle theme={theme}>Who ?</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Self-Introduction</ContentsTitle>
        <Description>
          <span className="text-2xl">
            私は既存のコードパターンに従うだけでなく、新しい技術や解決策を積極的に探求し、導入することを好みます。さらに、これらを会社の開発理念に沿った形でリファクタリングし、社内オープンソースとして構築した経験も多数あります。
            <br /> <br />
            例えば、Nexus CommunityやJPアプリの開発中に、Next.js 12 の fetch
            リクエストにおけるキャッシュ問題や baseURL
            設定の課題に直面しました。これを解決するために、レスポンス／リクエスト処理や
            baseURL 設定、インターセプター機能を含む customFetchBase
            という独自ライブラリを開発し、社内向けに配布しました。
            <br /> <br /> また、JP
            アプリの開発中には、これまで存在しなかったライトモード・ダークモードをより簡単に実装できるようにするためのオープンソース開発も並行して進めています。
            <br /> <br />{" "}
            私は常に「このコードをもっと読みやすくするには？」「もっと効率的にするには？」と自問し、最新技術を習熟し高度に活用することを怠らない開発者です。単なるコーダーではなく、本物の開発者として成長し続けています。
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Education</ContentsTitle>
        <Description>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">KAIST RESEARCH：科学英才教育プログラム</li>
            <li className="pb-2">Soongsil University：経営学専攻</li>
            <li className="pb-2">
              Franklin University Switzerland: AI・ビッグデータ専攻
            </li>
          </ul>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>職務経歴</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2016 – 2019｜軍務
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              MIMS（軍事情報管理システム）および
              SIMS（信号情報分析プログラム）プロジェクトに参加し、Java と React
              の実務経験を習得。
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2022 – 2023｜開発2チーム チームリーダー｜Klim Solutions
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              軍での開発経験を活かして Klim Solutions に入社し、Belleforet
              ハイブリッドアプリ開発を総括。
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2023年6月 – 2024年6月｜シニア開発者｜Nexus（UBase 子会社）
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Klim Solutions のレガシー eGov フレームワーク固執を理由に Nexus
              へ転職。
            </li>
            <li className="pb-2">
              U Analysis および U Rms プロジェクトを担当し、U Rms
              のフロントエンドを単独で開発。
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2024年6月 – 2024年9月｜フロントエンド開発者｜Team Monolith
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              招待を受け、デジタル教科書プラットフォームの開発に参加。
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2024年9月 – 2025年1月｜フルスタック開発者｜StyleLeader
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              海外研修と並行して StyleLeader サイト開発に従事。
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2024年12月 – 現在｜フロントエンド開発者 | JP （旅行レビューSNS）
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Google Maps API
              を活用した旅行レビューSNSアプリを開発中。1月中旬にリリース予定。
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
        <ContentsTitle theme={theme}>Who ?</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Self-Introduction</ContentsTitle>
        <Description>
          <span className="text-2xl">
            기존 코드를 답습하기 보다는 새로운 기술과 해결방식을 적용하는 것을
            좋아합니다. <br />
            또한 이를 회사의 개발철학에 맞는 방식으로 리팩터링하여 회사 내부에서
            사용할 수 있는 오픈소스로 구축한 경험도 다수 있습니다.
            <br /> <br />
            실제로 nexus community와 현재 개발하고 있는 제피 어플에서는 각각
            Next 12버전 fetch의 자체 캐싱문제와 baseUrl 설정 문제가 있어 이를
            직접 직접 response, request 핸들링과 baseUrl 설정 및 intercepter가
            기능하게끔 customFetchBase 라이브러리를 자제 제작하여 사내에
            배포해서 활용하였습니다.
            <br />
            <br />
            제피 어플 개발 중에는 지금까지 존재하지 않았던 Light mode, Drak
            mode를 좀 더 쉽게 구축하기 위해 오픈소스 개발을 병행하여
            진행중입니다.
            <br /> <br />
            이처럼 저는 개발자로서 좀 더 최신 기술을 능숙하고 고도화해서 사용할
            수 있는 노력을 멈추지 않아왔습니다. <br />
            "어떻게 하면 더 가독성이 좋을까?", "어떻게 하면 좀 더 효율적인
            코드일까?" 라는 질문을 끊임없이 스스로 되묻는 저는 코더가 아닌
            개발자 소순현입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Education</ContentsTitle>
        <Description>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">KAIST RESEARCH: 과학 영재 교육</li>
            <li className="pb-2">숭실대학교: 경영학 전공</li>
            <li className="pb-2">
              Franklin University Switzerland: AI & Big Data 전공
            </li>
          </ul>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Professional Experience</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2016 – 2019 | Military Service
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              군에서 Java 및 React를 활용한 MIMS (군사첩보유통체계) 및 TAMS
              (신호정보 분석 프로그램) 사업에 참여하였습니다.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            2022 – 2023 | Team Lead, 개발 2팀 | 크림 솔루션
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              군에서의 경력을 인정받아 INQ 본부 개발2팀 팀장 직책으로
              크림솔루션에 입사하였으며, Belleforet 하이브리드앱 제작을
              총괄하였습니다.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Jun 2023 – Jun 2024 | DT 서비스 개발팀 선임 | Nexus (UBase
            Subsidiary)
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              크림솔루션의 개발방침이 egov를 고집하는 관계로 UBase의 자회사인
              Nexus로 선임으로 이직하였습니다.
            </li>
            <li className="pb-2">
              맡은 프로젝트는 U Analysis, U Rms입니다. 이중 U Rms의 FrontEnd는
              단독으로 진행하였습니다.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Jun 2024 – Sep 2024 | Front-End 개발자 | 팀모노리스
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Nexus는 솔루션 회사의 특성 상 폐쇄망에서의 개발이 주로 이루어지며,
              회사의 메인 솔루션인 상담 솔루션은 웹앱이 아닌 C++ 엔진이 기반인
              관계로 해외 연수를 계획하고 이동하려던 중 팀 모노리스의
              디지털교과서 개발에 함께하자는 연락으로 FrontEnd 개발자로
              팀모노리스에 입사하여 디지털 교과서 사업에 참여하였습니다.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Sep 2024 – Jan 2025 | Full-Stack 개발자 | StyleLeader
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              디지털교과서 사업이 종료되고, 스타일리더의 연락을 받아 해외에서
              연수를 진행하면서, 해외에서 스타일리더 사이트 개발을
              진행하였습니다.
            </li>
          </ul>
          <ContentsTitle
            theme={theme}
            css={css`
              font-size: 2.4vw;
            `}
          >
            Dec 2024 – Present | Front-End 개발자 | JP (Travel Review SNS)
          </ContentsTitle>
          <ul
            className="text-left text-2xl"
            css={css`
              list-style: unset;
              padding-left: 1.4rem;
            `}
          >
            <li className="pb-2">
              Google Map API 기반 여행 리뷰 SNS 어플, 제피 개발 중
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
