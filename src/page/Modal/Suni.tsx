import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import { Container, Description, Language } from "./Base";

export function Suni(props: { language: Language }) {
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
        <ContentsTitle theme={theme}>Who ?</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Self-Introduction</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Rather than simply following existing code patterns, I enjoy
            applying new technologies and creative solutions. <br />
            I also have extensive experience refactoring systems to align with a
            company’s development philosophy and turning them into internal
            open-source projects. <br /> <br />
            For example, in the Nexus Community project and my current app, JP,
            I developed a custom library called <strong>
              customFetchBase
            </strong>{" "}
            to solve issues such as caching in Next.js 12 fetch and baseURL
            configuration. <br />
            This library independently handles request/response interception and
            baseURL management, and was deployed for internal use across
            multiple teams. <br /> <br />
            During JP’s development, I also worked on open-source tools to
            simplify implementing <strong>Light</strong> and{" "}
            <strong>Dark Mode</strong> — features that hadn’t previously existed
            in the project. <br /> <br />
            As a developer, I constantly strive to master the latest
            technologies and push them further. <br />I always ask myself, “How
            can I make this code more readable?” or “How can it be more
            efficient?” — this mindset defines me not just as a coder, but as a
            true developer, <strong>SOONHYUN SO</strong>.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Education</ContentsTitle>
        <Description>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
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
          <ContentsTitle fontSize={2.4} theme={theme}>
            2016 – 2019 | Military Service
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Participated in MIMS (Military Intelligence Management System) and
              TAMS (Signal Information Analysis System) projects using Java and
              React.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2022.08 – 2022.11 | Server Developer | Neaco
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Participated in the government-led WTA Trade Training Program and
              supported Avocado’s project for three months. <br />
              Initially assigned to trade-related tasks, but due to a shortage
              of developers, I joined the development team and worked on the{" "}
              <strong>Neaco App</strong>.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2022.11 – 2023.05 | Team Lead, Development Team 2 | Cream Solution
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Promoted to Team Lead based on prior development experience in the
              military. <br /> Oversaw the development of the{" "}
              <strong>Belleforet Hybrid App</strong> as the lead developer.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2023.06 – 2024.06 | Senior Developer | Nexus (UBase Subsidiary)
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Transferred from Cream Solution due to its insistence on legacy
              eGov frameworks. Joined Nexus under UBase as a senior developer.
            </li>
            <li className="pb-2">
              Led projects including <strong>U Analysis</strong> and{" "}
              <strong>U RMS</strong>, independently handling the front-end of U
              RMS.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024.06 – 2024.09 | Front-End Developer | Team Monolith
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Joined Team Monolith to develop the{" "}
              <strong>Digital Textbook Platform</strong>, after being invited to
              participate in the project.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024.10 – 2025.01 | Full-Stack Developer | StyleLeader
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              After the digital textbook project concluded, I worked remotely
              while abroad to develop the <strong>StyleLeader</strong> site.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024 – Present | Front-End Developer | JP (Travel Review SNS)
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Currently developing <strong>JP</strong>, a travel review SNS
              based on Google Maps API.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.02 – 2025.06 | Full-Stack Developer | Internal Groupware
            Systems
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Worked as a freelancer, building groupware systems for early-stage
              international startups.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.06 – 2025.06 | Full-Stack Developer | Sports & Streaming
            Platform
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              As a freelancer, developed a platform that allows users to watch
              and record live streams from services such as{" "}
              <strong>Soop</strong>, <strong>Chzzk</strong>, and various sports
              networks worldwide.
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.06 – 2025.06 | Full-Stack Developer | Cryptocurrency Exchange
            Platform
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Developed a peer-to-peer cryptocurrency trading platform with
              integrated loan functionality, enabling easy person-to-person coin
              exchanges.
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
        <ContentsTitle theme={theme}>自己紹介</ContentsTitle>
        <Description>
          <span className="text-2xl">
            既存のコードを踏襲するよりも、新しい技術や解決方法を適用することを好みます。
            <br />
            また、会社の開発哲学に合わせてリファクタリングし、社内で利用できるオープンソースとして構築した経験も多数あります。
            <br />
            <br />
            例えば、Nexus Community や現在開発中の JP アプリでは、Next.js 12 の
            fetch キャッシュ問題や baseURL 設定問題を解決するため、
            <br />
            自ら <strong>customFetchBase</strong>{" "}
            というライブラリを開発し、リクエスト/
            レスポンス処理やインターセプター機能を追加して社内配布しました。
            <br />
            <br />
            JP アプリ開発中には、Light Mode / Dark Mode
            をより簡単に構築できるよう オープンソース開発も並行して行いました。
            <br />
            <br />
            このように、私は常に最新技術をより深く、より洗練された形で扱う努力を
            続けてきました。
            <br />
            「どうすればもっと可読性が高くなるか？」「どうすればもっと効率的か？」
            <br />
            そう自問自答し続ける私は、ただのコーダーではなく開発者、
            <strong>SOONHYUN SO</strong> です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>学歴</ContentsTitle>
        <Description>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">KAIST RESEARCH：科学英才教育プログラム</li>
            <li className="pb-2">崇実大学：経営学専攻</li>
            <li className="pb-2">
              フランクリン大学（スイス）：AI & ビッグデータ専攻
            </li>
          </ul>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>職務経歴</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2016 – 2019｜軍勤務
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Java と React を活用し、MIMS（軍事情報管理システム）および
              TAMS（信号情報分析プログラム）の開発に参加。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2022.08 – 2022.11｜サーバー開発者｜Neaco
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              政府主催の WTA 貿易教育プログラムに参加し、3ヶ月間 Avocado
              プロジェクトを支援。
              <br />
              当初は貿易業務を担当予定でしたが、開発チームの人員不足により
              開発チームで Neaco アプリの開発業務を担当。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2022.11 – 2023.05｜開発2チームチームリーダー｜Cream Solution
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              軍での経験を評価され、INQ本部の開発2チームリーダーとして入社。
              <br />
              <strong>Belleforet</strong> ハイブリッドアプリの開発を総括。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2023.06 – 2024.06｜上級開発者｜Nexus（UBase子会社）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              旧式の eGov フレームワーク方針を避け、UBase の子会社 Nexus
              に転職。
            </li>
            <li className="pb-2">
              「U Analysis」「U RMS」プロジェクトを担当し、そのうち U RMS
              のフロントエンド開発を単独で実施。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024.06 – 2024.09｜フロントエンド開発者｜Team Monolith
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              招待を受け、デジタル教科書プラットフォーム開発に参加。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024.10 – 2025.01｜フルスタック開発者｜StyleLeader
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              デジタル教科書事業終了後、海外研修中に StyleLeader
              サイトの開発を担当。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2024 – 現在｜フロントエンド開発者｜JP（旅行レビューSNS）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Google Map API を活用した旅行レビューSNS「JP」を開発中。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.02 – 2025.06｜フルスタック開発者｜社内グループウェア開発
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              フリーランスとして、海外の新興企業向けにグループウェアシステムを構築。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.06 –
            2025.06｜フルスタック開発者｜スポーツ・ストリーミングプラットフォーム
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Soop、Chzzk、海外スポーツ配信を視聴・録画できるプラットフォームを
              フリーランスとして開発。
            </li>
          </ul>

          <ContentsTitle fontSize={2.4} theme={theme}>
            2025.06 – 2025.06｜フルスタック開発者｜暗号通貨取引プラットフォーム
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              個人間のコイン取引や貸付機能を実現する
              暗号通貨P2P取引プラットフォームを開発。
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
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
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
          <ContentsTitle fontSize={2.4} theme={theme}>
            2016 – 2019 | Military Service
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              군에서 Java 및 React를 활용한 MIMS (군사첩보유통체계) 및 TAMS
              (신호정보 분석 프로그램) 사업에 참여하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2022. 08. – 2022. 11. | Server Developer, 개발팀 | Neaco
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              WTA 라는 정부 주관 무역 교육에 참여하였으며, 3개월 동안 아보카도의
              프로젝트 업무를 도왔습니다. 무역으로 업무를 진행했어야하나, 해당
              회사의 개발팀에 인력이 없어 개발팀으로 업무를 진행하였습니다.
              업무는 Neaco 어플 개발입니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2022. 11. – 2023. 05. | Team Lead, 개발 2팀 | 크림 솔루션
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              군에서의 경력을 인정받아 INQ 본부 개발2팀 팀장 직책으로
              크림솔루션에 입사하였으며, Belleforet 하이브리드앱 제작을
              총괄하였습니다.
            </li>
            <li className="pb-2">
              Market Kully의 정산시스템 개발 프로젝트에 참여한 이력이 있습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2023. 06. – 2024. 06. | DT 서비스 개발팀 선임 | Nexus (UBase
            Subsidiary)
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              크림솔루션의 개발방침이 egov를 고집하는 관계로 UBase의 자회사인
              Nexus로 선임으로 이직하였습니다.
            </li>
            <li className="pb-2">
              맡은 프로젝트는 U Analysis, U Rms입니다. 이중 U Rms의 FrontEnd는
              단독으로 진행하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2024. 06 – 2024. 09 | Front-End 개발자 | 팀모노리스
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Nexus는 솔루션 회사의 특성 상 폐쇄망에서의 개발이 주로 이루어지며,
              회사의 메인 솔루션인 상담 솔루션은 웹앱이 아닌 C++ 엔진이 기반인
              관계로 해외 연수를 계획하고 이동하려던 중 팀 모노리스의
              디지털교과서 개발에 함께하자는 연락으로 FrontEnd 개발자로
              팀모노리스에 입사하여 디지털 교과서 사업에 참여하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2024. 10. – 2025. 01. | Full-Stack 개발자 | StyleLeader
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              디지털교과서 사업이 종료되고, 스타일리더의 연락을 받아 해외에서
              연수를 진행하면서, 해외에서 스타일리더 사이트 개발을
              진행하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2024 - ... | Front-End 개발자 | JP (Travel Review SNS)
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Google Map API 기반 여행 리뷰 SNS 어플, 제피 개발 중
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2025. 02. - 2025. 06 | FullStack 개발자 | 사내 그룹웨어 개발
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              프리랜서로서 의뢰를 받아 기타 해외 신생업체들의 그룹웨어 시스템을
              구축하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2025. 06. - 2025. 06 | FullStack 개발자 | 스포츠 및 스트리밍 플랫폼
            개발
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              프리랜서로서 의뢰를 받아 Soop, chzzk, 국내외 스포츠 영상을
              시청하고, 녹화할 수 있는 플랫폼을 개발하였습니다.
            </li>
          </ul>
          <ContentsTitle fontSize={2.4} theme={theme}>
            2025. 06. - 2025. 06 | FullStack 개발자 | 암호화폐 거래 플랫폼 개발
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              프리랜서로서 의뢰를 받아 개인간 코인 거래를 손쉽게 할 수 있고 대출
              시스템까지 유지 가능한 암호화폐 개인거래 플랫폼을 개발하였습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
