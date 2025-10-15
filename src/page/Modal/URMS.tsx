import { Container, Description, Language } from "./Base";
import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";

export function URMS(props: { language: Language }) {
  const { language } = props;
  const components = {
    en: <EnVersion />,
    jp: <JpVersion />,
    kr: <KrVersion />,
  };

  return (
    <>
      <Container>{components[language as Language]}</Container>
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
            URMS is a system monitoring application currently used by companies
            such as SK and Kakao. <br />
            The client was built using Next.js v12, the main API was developed
            with Java Spring Boot, and the core engine installed on each device
            was developed in C++.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            I independently designed and developed both the client and main API
            components of URMS, excluding the C++ core. <br />
            Therefore, excluding the core, my development contribution rate is
            effectively 100%.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS Client
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Next.js v12 was the last version to use the traditional “pages”
              directory. <br />
              At the time of development, Next 13 had just been released and was
              considered unstable, so I chose v12 for better reliability.
              <br />
              Furthermore, due to some instability within Next itself, I adopted
              a more React-like development approach wherever possible.
            </li>
            <li className="pb-2">
              The main features of URMS include resource monitoring, extension
              management, server monitoring, and job tracking.
            </li>
            <li className="pb-2">
              Since most of the extension, server, and job functions were
              table-based statistics and notifications, I was able to implement
              them efficiently using React TanStack Table.
            </li>
            <li className="pb-2">
              However, for resource monitoring—one of the most critical screens
              for users—the system included key features such as DnD components
              and real-time server connection visualization using React Flow.
            </li>
            <li className="pb-2">
              The DnD feature was implemented with the React Grid Layout
              library. <br />
              The main challenge was that when the layout included headers, the
              DnD offset became misaligned due to layout rendering.
            </li>
            <li className="pb-2">
              To solve this, I used React’s <code>lazy</code> and
              <code>Suspense</code> features to control component load timing
              manually. <br />
              By ensuring that GNB and SNB were loaded first, then mounting the
              DnD component area (with the id “dnd-component-area”), I was able
              to isolate DnD behavior to that area only — maintaining perfect
              alignment and performance.
            </li>
            <li className="pb-2">
              The component responsible for visualizing communication status
              between servers was built using React Flow, which represents
              components as nodes connected by edges. <br />
              While connecting node data from the Java server was
              straightforward, creating customized edges required additional
              implementation effort.
            </li>
            <li className="pb-2">
              Server connections were categorized into three states —
              <strong>Disconnected</strong>,<strong>Communication Error</strong>
              , and <strong>Normal</strong>.
              <br />
              To synchronize each edge precisely with its corresponding node, I
              implemented a 2D coordinate-based calculation hook that computed
              intercepts in real time, preventing edges from breaking visually.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS Server
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The server was developed with Spring Boot 2 and Java 11. <br />
              Considering that the company primarily used Java 8 and Spring MVC
              2, this choice ensured compatibility and prevented potential
              runtime conflicts.
            </li>
            <li className="pb-2">
              The server mainly handled CRUD APIs and gateway logic. <br />
              However, due to the real-time nature of monitoring—requiring
              second-by-second updates—performance optimization was essential.
            </li>
            <li className="pb-2">
              I used JMeter to systematically calculate optimal DB pool and
              thread pool values. <br />
              Thread groups ranged from 6 to 200, with a 60-second ramp-up and
              spike tests conducted (100 → 200 → 50) to ensure stability under
              load.
            </li>
            <li className="pb-2">
              In addition, I optimized queries with <strong>Query Hints</strong>
              and implemented pagination using <strong>Native Queries</strong>
              to minimize the load on the Java server.
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
            URMS は現在、SK や Kakao などの企業で使用されている
            システムモニタリングアプリです。
            <br />
            クライアントは Next.js v12 を使用し、メイン API は Java Spring Boot
            で開発、各端末に組み込まれるコアエンジンは C++
            ベースで構築されています。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            URMS では C++ コアを除くクライアントおよびメイン API
            をすべて単独で設計・開発しました。
            <br />
            そのため、コアを除いた開発貢献度は実質的に 100％ です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS クライアント
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Next.js v12 は “pages”
              ディレクトリを使用する最後のバージョンです。
              <br />
              開発当時は v13 がリリースされたばかりで情報が少なく、安定性を
              重視して v12 を採用しました。
              <br />
              また、Next 自体の不安定さを考慮し、React
              本来の開発方式をより積極的に取り入れました。
            </li>
            <li className="pb-2">
              URMS
              の主な機能は、リソース監視、内線管理、サーバー監視、作業モニタリングです。
            </li>
            <li className="pb-2">
              内線・サーバー・作業管理はテーブルベースの統計や通知が中心であったため、
              React TanStack Table を用いて効率的に実装しました。
            </li>
            <li className="pb-2">
              一方、リソース監視はユーザーが最も重視する画面であり、 DnD
              コンポーネントや React Flow
              を用いたサーバー間通信状態の可視化などが主要機能となっています。
            </li>
            <li className="pb-2">
              DnD 機能は React Grid Layout
              ライブラリを使用しましたが、ヘッダーを含むレイアウトでは DnD
              位置がずれるという問題がありました。
            </li>
            <li className="pb-2">
              これを解決するために、React の <code>lazy</code> と
              <code>Suspense</code>
              機能を活用し、コンポーネントのロードタイミングを制御しました。
              <br />
              GNB と SNB を先に読み込み、すべて完了後に “dnd-component-area”
              をロードし、その領域内でのみ DnD
              を動作させることで、レイアウトのズレを防ぎました。
            </li>
            <li className="pb-2">
              サーバー通信状態を可視化するコンポーネントは React Flow
              で構築しました。各サーバーをノードとして、接続をエッジで
              表現するライブラリです。
              <br />
              ノードの接続データは問題なく処理できましたが、エッジは
              カスタム実装が必要でした。
            </li>
            <li className="pb-2">
              サーバー接続は「切断」「通信異常」「正常」の3状態に分類し、
              各エッジをノードに正確に結びつけるため、2次元座標を計算して
              初期位置を設定し、リアルタイムで傾きを再計算する Hook
              を実装して、エッジが不自然に途切れないようにしました。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS サーバー
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              サーバーは Spring Boot 2 と Java 11 で開発しました。
              <br />
              社内のスキルスタックが Java 8 と Spring 2（MVC）であったため、
              互換性エラーを避ける目的でこの構成を選択しました。
            </li>
            <li className="pb-2">
              サーバーは基本的に CRUD API とゲートウェイ機能で構成されています。
              <br />
              ただし、モニタリングサーバーの性質上、1秒単位の更新が
              必要であるため、パフォーマンス最適化が必須でした。
            </li>
            <li className="pb-2">
              DB プールとスレッドプールの最適値を体系的に算出するため、 JMeter
              を使用してテストを実施しました。
              <br />
              Thread Group は 6～200、Ramp-Up は 60 秒、Spike Test は 100 → 200
              → 50 の急変負荷にも対応できるよう設定しました。
            </li>
            <li className="pb-2">
              また、単純ではありますが Query Hint を併用し、 ページネーションを
              Native Query で直接実装することで Java
              サーバーの負荷を最小化しました。
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
            URMS는 현재 SK, Kakao 등에서 사용하는 시스템 모니터링 App입니다.
            <br /> Client는 Next JS v12를 사용하였으며, 메인 API는 Java
            SpringBoot, 각 단말에 심어지는 Core 엔진은 C++ 기반입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            URMS 는 Core를 제외한 Client 와 메인 API를 모두 단독으로 설계하고
            개발함에 따라, <br /> 개발 기여도는 Core 를 제외하면 100%입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS Client
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Next 12 버전은 page 디렉터리를 사용하는 마지막 버전입니다. <br />
              개발 당시에는 13버전이 나오고 시간이 많이 지나지 않아 정보가
              많지않아 12버전이 좀더 안정적이라 판단하고 개발을 진행하였습니다.
              <br /> 또한, Next 자체가 좀 불안정하다는 판단하에 Next 보다는
              react 의 개발 방식을 좀 더 적극적으로 차용하였습니다.
            </li>
            <li className="pb-2">
              URMS의 주요기능은 자원, 내선, 서버, 작업 모니터링입니다.
            </li>
            <li className="pb-2">
              내선, 서버, 작업은 사실상 테이블 기반의 통계 및 알림 기능이
              대부분인 관계로 React TanStack Table을 통해 무리없이 제작할 수
              있었습니다.
            </li>
            <li className="pb-2">
              단, 자원모니터링의 경우 사용자가 가장 유의하여 감시해야하는
              화면으로 컴포넌트의 DnD, React flow 를 통한 각 서버별 현재
              통신상태를 확인할 수 있는 주요 기능이 있습니다.
            </li>
            <li className="pb-2">
              DnD 기능은 React Grid Layout 라이브러리를 사용하였습니다만, <br />
              이 라이브러리의 가장 큰 문제는 header less layout이 아니라면 DnD의
              기능이 layout에 의해 틀어진다는 점이었습니다.
            </li>
            <li className="pb-2">
              해당 기능을 정상적으로 구현하기 위해서 react 의 lazy와 Suspense
              기능을 활용하여 DnD 컴포넌트들의 로드 시점을 직접 통제할 필요가
              있었습니다. <br /> GNB와 SNB를 먼저 Load 시키고 모두 로드된 시점에
              dnd-component-area 라는 id를 가진 요소를 로드시키고 그 다음 lazy로
              기록해둔 Dnd 기능을 동작시켜 GNB와 SNB 를 제외하고
              dnd-component-area 내부에서만 DnD를 동작하게 하여 layout 틀어짐
              없이 각 기능을 유지시켰습니다.
            </li>
            <li className="pb-2">
              각 서버별로 통신상태를 알 수 있게 하는 컴포넌트는 react flow를
              통해 구축하였는데, 해당 라이브러리는 컴포넌트를 node로 표현하고 각
              연결을 edge 로 연결할 수 있는 라이브러리입니다. <br /> java 서버로
              부터 받은 연결 상태 데이터를 각 node와 edge로 연결해야하는데,
              node의 경우는 큰 문제가 없으나 edge의 경우는 직접 custom을
              제작해야한다는 점이 문제였습니다.
            </li>
            <li className="pb-2">
              서버 연결은 세가지 상태로 분류하였는데 이는 연결 중단과 통신이상,
              정상 입니다. 각 edge를 유지하는 컴포넌트를 별도 작성하였으며, 이를
              정확히 노드와 연결하기 위해 2차원 좌표 평면을 계산하여 각 노드별
              최초 위치를 init 하고 실시간으로 절편을 계산하는 방정식을 hook을
              제작하여 edge가 이질적으로 끊어지지 않도록 작성하였습니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            URMS Server
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Server는 spring Boot 2 버전과 java 11을 사용하였습니다. <br />
              회사의 Skill Stack 이 java 8 과 spring 2 (MVC)버전을 사용한다는
              점을 고려하여 혹시모를 호환 에러를 방지하기 위한 조치였습니다.
            </li>
            <li className="pb-2">
              <br /> Server의 경우 단순 CRUD API 및 게이트웨이 기능인지라 특별한
              점은 없으나, <br /> 모니터링 서버의 특성상 초단위의 확인이
              지속해서 구동되어야 하기에 성능개선이 필수였습니다.
            </li>
            <li className="pb-2">
              DB Pool 과 thread pool 의 최적 값 계산이 체계적으로 진행되게 하기
              위해 JMeter를 활용하여 테스트를 진행하였으며, Thread Group은 6 ~
              200, Ramp-Up은 60Sec, Spike-Test 100 {"->"} 200 {"->"} 50으로 급변
              테스트까지 가능하도록 진행하였습니다.
            </li>
            <li className="pb-2">
              또한, 단순하긴 하지만 Query Hint 도 작성함과 동시에 Pagination도
              Native Query를 통해 직접 작성하여 java server의 부담을
              최소화하였습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
