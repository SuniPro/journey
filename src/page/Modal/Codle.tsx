import { Container, Description, Language } from "./Base";
import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import Button from "@mui/material/Button";

export function Codle(props: { language: Language; link?: string }) {
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
            Codle is a digital textbook application used in South Korea. <br />
            The client was built using React, and the server was developed with
            Ruby and Ruby on Rails. <br />
            The CI/CD pipeline follows a GitHub Actions → AWS EKS → ArgoCD
            structure.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            I was responsible for developing the teacher evaluation module,
            decision path (ActivityCourse), and PDF textbook features within the
            digital textbook system. <br />
            My overall development contribution rate was approximately 25%.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Education Evaluation for Teachers
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The evaluation system is a dashboard-based feature that receives
              student assessment data from the server and visualizes it. <br />I
              developed the navigation structure, an avatar-based identification
              system, and a dual-table interface using TanStack Table to improve
              usability.
            </li>
            <li className="pb-2">
              Because multiple shared table components were used across the app,
              I created a reusable wrapper table component. <br />
              This allowed other developers to easily configure filters and
              checkboxes simply by passing props for type and value.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            ActivityCourse
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The “Decision Path” (ActivityCourse) feature allows teachers to
              design their own class curriculum. <br /> It was implemented using
              the <strong>React Flow</strong> library.
            </li>
            <li className="pb-2">
              Based on arrays received from the server, edges and nodes are
              dynamically generated. Each bundle of paths corresponds to nodes
              that represent activities and display boards, which can be freely
              added by teachers.
            </li>
            <li className="pb-2">
              The “Decision Path” feature required significant development
              effort. The most challenging part was designing the path
              algorithm: <br />
              when a node is removed, the flow must correctly split and
              reconnect to valid points, while managing a large amount of
              duplicate data. <br />I solved this by rewriting the original
              logic and creating a new <strong>sink function</strong> from
              scratch to handle complex branching.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            PDF Activity
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              There are very few open-source solutions for handling PDFs
              effectively in React. <br />I used <strong>react-pdf</strong>, a
              library based on <strong>pdf.js</strong>, and manually implemented
              zoom and scaling features.
            </li>
            <li className="pb-2">
              The most difficult challenge in PDF rendering was the flickering
              issue caused by page re-rendering whenever the scale value
              changed.
              <br />I solved this by rendering only the first page immediately
              and setting subsequent pages to hidden, then re-rendering them
              silently via the <strong>onRenderSuccess</strong> callback. <br />
              As a result, users see only the smoothly updated PDF without
              noticing the rendering transition.
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
            Codle は韓国で使用されているデジタル教科書アプリです。
            <br />
            クライアントは React で構築され、サーバーは Ruby および Ruby on
            Rails を使用して開発されました。
            <br />
            CI/CD パイプラインは GitHub Actions → AWS EKS → ArgoCD
            という構成です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            デジタル教科書において、教師が使用する評価パート、分岐コース
            (ActivityCourse)、および PDF 教科書機能を担当しました。
            <br />
            全体の開発貢献度は約 25％ です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            教師向け評価システム
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              評価システムは、サーバーから学生の評価データを受け取り、
              ダッシュボード上に表示するシンプルな構造です。
              <br />
              ナビゲーション構成、アバターによる識別システム、 そして TanStack
              Table を活用したデュアルテーブル機能を開発しました。
            </li>
            <li className="pb-2">
              共通で使用されるテーブルが多いため、再利用可能なラッパーテーブルコンポーネントを
              作成しました。
              <br />
              これにより、他の開発者はタイプと値を渡すだけで
              複数のフィルターやチェックボックスを簡単に追加できるようになりました。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            ActivityCourse（分岐コース）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              分岐コース機能は、教師が授業カリキュラムを設計できる機能です。
              <br />
              使用したライブラリは <strong>React Flow</strong> です。
            </li>
            <li className="pb-2">
              サーバーから受け取った配列データを基にエッジを生成し、
              各コースに対応するノード、アクティビティ、および表示ノードを生成します。
              教師はこれらを自由に追加・編集できるよう設計しました。
            </li>
            <li className="pb-2">
              分岐コースは特に開発工数の多い機能であり、最も難航した部分は
              分岐アルゴリズムの設計でした。
              <br />
              特定ノードを削除した際、ポイントを再接続し複数の経路を正確に
              再構成する必要があり、重複データも多く複雑でした。
              <br />
              そのため既存コードを削除し、新たに <strong>sink 関数</strong>{" "}
              を作成して処理を最適化しました。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            PDF Activity
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              React で PDF を効果的に扱うオープンソースはほとんど存在しません。
              <br />
              そのため、<strong>react-pdf</strong>（<strong>pdf.js</strong>
              ベースのライブラリ）を使用し、ズームやスケーリングなどの機能を
              手動で実装しました。
            </li>
            <li className="pb-2">
              PDF
              レンダリングで最も難しかった点は、ページスケール値が変更されるたびに
              点滅する現象でした。
              <br />
              この問題は、最初のページのみ即時変更し、 以降のページは{" "}
              <code>visibility: hidden</code> で非表示にして
              裏で静かに再レンダリングを行うことで解決しました。
              <br />
              最終的にユーザーはスムーズに更新された PDF を閲覧でき、
              レンダリングの過程は見えないようになっています。
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
            Codle은 한국의 디지털교과서 App입니다.
            <br />
            client 는 react, server 는 Ruby, Ruby on Rails를 사용합니다.
            <br />
            CI-CD는 Git Action - AWS EKS - ArgoCD pip line 형태입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            디지털 교과서에서 선생님들이 사용하는 평가 파트와 갈림길, PDF 교과서
            부분을 맡아 개발함에 따라, <br />
            개발 기여도는 25%입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Education evaluation for teacher
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              평가 시스템은 학생들의 평가 데이터를 Server 를 통해 전달받아 이를
              <br />
              대시보드에 출력하는 단순한 시스템이며, 각 교육이 포함되는
              Navigation 과 이를 효과적으로 식별할 수 있게 하는 Avatar, Tanstack
              Table 기반 듀얼 테이블 기능을 개발하였습니다.
            </li>
            <li className="pb-2">
              공통적으로 사용되는 테이블이 다수인 관계로 별도의 공통 wrapper
              Table 을 작성하였으며, 이를 통해 다른 개발자들은 타입과 값을
              전달하면 여러 값으로 된 필터를 선택할 수 있으며, 체크박스의 추가도
              쉽게 할 수 있게 됩니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            ActivityCourse
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              갈림길은 교사가 수업의 커리큘럼을 작성할 수 있게 하는 기능입니다.
              <br /> 사용한 라이브러리는 react flow 입니다.
            </li>
            <li className="pb-2">
              서버로 부터 받은 배열을 기반으로 Edges 를 생성하고
              <br /> 각 갈림길 번들에 대응되는 node 를 생성, 내부의 활동들과
              표시판 노드들을 생성하는 과정이며, 교사가 임의로 추가가 가능하게
              설계하였습니다.
            </li>
            <li className="pb-2">
              갈림길이란 기능은 특수 기능이기도 한지라, 공수가 꽤나 많이 들어간
              기능입니다. 따라서 개발 과정에서 난항이 좀 많았는데 대표적으로는
              갈림길 활동 알고리즘입니다. <br /> 갈림길에서 특정 노드를 제거했을
              때 두개 이상으로 나뉘어 다시 포인트를 찾아 반환이 되어야하는데
              중복 데이터도 상당한 양이고, <br />
              조금 복잡했던 경향이 있어 이것을 기존 코드를 제거하고 새롭게 sink
              함수를 제작하는 과정이 가장 큰 난관이었습니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            PDF Activity
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              react에서 PDF를 잘 활용할 수 있게 하는 오픈소스는 사실 딱히 없다고
              보는 게 좋습니다. 따라서 react-pdf 와 같은 pdf.js를 매핑한
              라이브러리를 사용하였고, 확대, 축소 등의 기능도 직접
              작성하였습니다.
            </li>
            <li className="pb-2">
              PDF 설계 중 가장 까다로웠던 부분은 page 의 scale의 값이
              변화될때마다 Pdf가 반짝거리면서 변하는 부분입니다. <br /> 해당
              부분은 첫번째 항목만 바로 변경하고 이 다음 항목은 visibility를
              hidden으로 적용하여 사용자에게 노출되지 않고 조용히 그리고,
              onRenderSuccess 함수를 호출하여 첫번째 항목을 제거 최종적으로
              사용자는 변경된 scale의 pdf 를 보고 있으나, 렌더링 되는 과정은
              보지 않는 형태가 완성됩니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
