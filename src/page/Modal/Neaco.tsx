import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import { Container, Description, Language } from "./Base";

export function Neaco(props: { language: Language }) {
  const components = {
    en: <EnVersion />,
    jp: <JpVersion />,
    kr: <KrVersion />,
  };

  return (
    <>
      <Container>{components[props.language]}</Container>
    </>
  );
}

function EnVersion() {
  const theme = useTheme();
  return (
    <>
      <ContentsContainer>
        <ContentsTitle theme={theme}>What is this ?</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            The client was built using Angular, while the server was structured
            as a multi-module Java-based system. Since Spring Boot was not used,
            the Spring Framework was customized to selectively include only the
            necessary libraries for the API module. <br />
            The CI/CD process was implemented by deploying a Java wrapper to an
            EC2 server, relying solely on Java’s native packaging capabilities
            for deployment.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            After being recognized for my Japanese proficiency and technical
            skills, I joined the Avocado project through the government’s
            “Global Trade Data Tech Specialist” program. There, I worked as an
            intern developer on the Neaco platform — a cross-border fashion
            service between Japan and Korea — where I was responsible for
            implementing new server-side features. <br />
            My contribution to the Neaco server development accounted for
            approximately 40% of the total work as a backend developer.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Neaco Server Add Feature
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The Neaco server is a Java-based multi-module project that uses a
              customized Spring Framework to remain lightweight and
              performance-oriented.
            </li>
            <li className="pb-2">
              Following the company’s direction, my main responsibilities
              included rebuilding the DAO layer based on Hibernate and adding
              Mahout-based item recommendation and coupon features.
            </li>
            <li className="pb-2">
              I removed the manual data cache logic from the codebase and added
              a mechanism within Hibernate Utils to automatically execute
              cleanup logic at session termination—similar to Java’s garbage
              collection behavior.
            </li>
            <li className="pb-2">
              I also implemented Mahout-based recommendation logic by
              incorporating its wrapper system. I configured user-item-random
              parameters at equal levels and developed a dedicated{" "}
              <strong>Recommender</strong> class to manage the entire
              recommendation system.
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
        <ContentsTitle theme={theme}>What is this ?</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            クライアントは Angular を使用し、サーバーは Java
            ベースのマルチモジュール構成で開発しました。
            <br />
            Spring Boot は使用せず、Spring Framework をカスタマイズして、API
            モジュールに必要な一部ライブラリのみを導入しました。
            <br />
            CI/CD は EC2 サーバーに Java ラッパーをデプロイする方式で行い、Java
            の標準的なパッケージング機能に依存してシンプルに展開を行いました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            日本語能力と開発スキルを評価され、政府主催の
            「グローバル貿易データテック専門家育成プログラム」
            を通じて、日韓間のクロスボーダーファッションプラットフォーム Avocado
            にインターンとして参加しました。
            <br />
            そこで、日本のファッションプラットフォーム Neaco
            のサーバー機能追加業務を担当しました。
            <br />
            バックエンド開発者として Neaco サーバー開発全体の約 40％
            に貢献しました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Neaco Server add feature
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Neaco のサーバーは Java
              ベースのマルチモジュールプロジェクトであり、Spring Framework
              をカスタマイズして、軽量かつ高性能を維持しています。
            </li>
            <li className="pb-2">
              この方針に従い、主な業務として Hibernate ベースの DAO
              層を再構築し、Mahout
              ベースのアイテム推薦機能とクーポン機能を追加しました。
            </li>
            <li className="pb-2">
              コード内にハードコーディングされていたデータキャッシュ処理を削除し、
              Hibernate Utils
              内でセッション終了を自動検知してキャッシュを自動的に整理するロジックを実装しました。
              これは Java の GC（ガーベジコレクション）と同様の仕組みです。
            </li>
            <li className="pb-2">
              さらに、Apache Mahout
              を活用してアイテム推薦ロジックを開発しました。ユーザー・アイテム・ランダムを同等のレベルで設定し、
              これらのクラスを使用する <strong>Recommender</strong>
              クラスを別途作成して、推薦システム全体を統括する設計としました。
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
        <ContentsTitle theme={theme}>What is this ?</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Architecture</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Client는 앵글러를 사용하였으며, Server는 Java 기반의 멀티모듈로
            구성하였습니다. Spring Boot를 사용하지 않은 관계로 Spring framework
            를 커스텀하여 Api 모듈에서 사용할 일부 라이브러리만 차용하였습니다.
            CI-CD는 EC2 서버에 java wrapper 를 올리는 방식으로, <br />
            단순히 Java 의 패키징 능력에 기대어 배포를 진행했습니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            일본어 및 개발능력을 인정받아 해외무역데이터테크 전문가 양성 과정을
            통해 일본과 한국간 크로스보터 패션 플랫폼인 아보카도에 인턴으로
            입사하여, 일본 패션 플랫폼인 Neaco의 서버 기능추가 직무를 맡아
            진행하였습니다. 서버개발자로서 Neaco 개발의 기여도는 40%입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Neaco Server add feature
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Neaco의 서버는 Java 기반의 멀티모듈 프로젝트로 구성되어있으며,
              Spring framework를 커스텀하여, 일부 라이브러리만 차용하고 성능을
              위해 최대한 가벼운 유지한 것이 특징입니다.
            </li>
            <li className="pb-2">
              따라서 이런 회사의 방침을 따라, hibernate 기반의 DAO 영역을
              재구축하고, mahout 기반 아이템 추천과 쿠폰 기능을 추가하는 것이
              저의 주 업무였습니다.
            </li>
            <li className="pb-2">
              기존의 Data Cache를 코드에 입력하는 부분을 제거하고 Hibernate
              Utils 상에서 excute를 실행하고 session 종료 시점에 자동으로 java
              GC 기능과 유사하게 세션 종료를 감지하고 데이터 캐시를 자동으로
              정리하는 로직을 추가하였으며,
            </li>
            <li className="pb-2">
              기존의 Data Cache를 코드에 입력하는 부분을 제거하고 Hibernate
              Utils 상에서 excute를 실행하고 session 종료 시점에 자동으로 java
              GC 기능과 유사하게 세션 종료를 감지하고 데이터 캐시를 자동으로
              정리하는 로직을 추가하였으며,
            </li>
            <li className="pb-2">
              mahout 기반의 아이템 추천 로직을 개발하였습니다. mahout 의 추천
              wrapper를 적극 차용하여, user-item-random 을 동등한 레벨로
              설정하여, 병행개발 하고 이 클래스들을 사용하는 Recommender
              클래스를 별도 생성하여 추천시스템을 총괄하게 설계하였습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
