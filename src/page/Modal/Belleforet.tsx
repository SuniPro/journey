import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import { Container, Description, Language } from "./Base";
import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";

export function Belleforet(props: { language: Language }) {
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
            variant="contained"
            onClick={() => window.open("https://belleforetresort.com/")}
          >
            Move to Page
          </Button>
        </ContentsContainer>
        {components[props.language]}
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
            The client was built using JSP, while the server was developed with
            Java Spring Boot and MyBatis. <br />
            The app was structured as a hybrid application — except for native
            components such as GNB and SNB, most of the system runs as a web app
            to minimize development workload.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            I led and independently developed both the Spring Boot–based server
            and the native Swift modules. <br />I also designed and structured
            the admin page project. As the leader of Development Team 2, my
            contribution to the Neaco development was approximately 60%.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Belleforet App Development
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The Belleforet project is a cross-platform application that
              includes both a PC page and a mobile app. Its main business
              involves selling resort hotel, golf, and other activity tickets.
            </li>
            <li className="pb-2">
              The community feature is a simple bulletin board with no special
              additional functionality.
            </li>
            <li className="pb-2">
              The payment gateway (PG) integration was developed using I’mport.
            </li>
            <li className="pb-2">
              The reservation system followed typical business logic found in
              commercial apps. Since it was my first time developing a
              reservation system for a private company, I focused on directly
              digitizing real-world business workflows. <br />
              For example, similar to a “pre-contract” in real estate, when a
              user initiates a reservation, it is recorded in Redis to prevent
              other users from booking the same date. Once payment is completed,
              the reservation is confirmed and stored in the database.
            </li>
            <li className="pb-2">
              As this app did not require any complex features, there were no
              significant technical difficulties during development.
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
            クライアントは JSP を使用し、サーバーは Java Spring Boot と MyBatis
            で開発しました。
            <br />
            アプリはハイブリッド構成で、GNB や SNB など
            ネイティブのみで動作する部分を除き、ほとんどを Web
            アプリとして動作させることで開発工数を最小限に抑えました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Spring Boot ベースのサーバーとネイティブ Swift
            モジュールを統括し、単独で開発を行いました。
            <br />
            また、管理者ページ（Admin Page）のプロジェクト設計を主導しました。
            開発第2チームのリーダーとして、Neaco 開発への貢献度は約60％です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Belleforet アプリ開発
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Belleforet プロジェクトは、PC ページとモバイルアプリの両方を含む
              クロスプラットフォームアプリであり、リゾートが運営するホテル、
              ゴルフ場、その他アクティビティチケットの販売が主な目的です。
            </li>
            <li className="pb-2">
              コミュニティ機能は単純な掲示板形式であり、特別な追加機能はありません。
            </li>
            <li className="pb-2">
              決済システム（PG）は I’mport を利用して開発を行いました。
            </li>
            <li className="pb-2">
              予約システムは一般的な商用アプリと大きな違いはありませんが、
              当時、民間企業向けの予約システムを開発するのは初めてだったため、
              ビジネスロジックをそのままデジタル化することに注力しました。
              <br />
              例えば、不動産契約の「仮契約」に似た仕組みとして、
              ユーザーが予約を開始すると Redis
              に記録され、他のユーザーが同日を予約しようとすると定員を事前にチェックし、
              決済をできないようにします。
              <br />
              そしてユーザーが決済を完了すると、予約が確定し、データベースに記録されます。
            </li>
            <li className="pb-2">
              特別な機能を持つアプリではなかったため、
              開発中に大きな技術的困難はありませんでした。
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
            Client는 JSP를 사용하였으며, Server는 Java SpringBoot, mybatis를
            사용하였습니다.
            <br />
            앱의 구조는 hybrid 앱으로 GNB, SNB 등 native 에서만 구동되는 부분을
            제외하고는 모두 웹앱으로 구동시켜 개발공수를 최소화 했습니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            SpringBoot 기반의 서버단과 Native swift를 총괄 및 단독 개발하였으며,
            어드민 페이지의 프로젝트 설계를 주도하였습니다. 개발 2팀장으로서
            Neaco 개발의 기여도는 60%입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Belleforet App Develop
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Belleforet 프로젝트는 PC 페이지와 앱을 모두 포함한 크로스보드
              앱으로 리조트에서 운영하는 호텔, 골프장, 기타 액티비티 티켓 판매가
              주력입니다.
            </li>
            <li className="pb-2">
              커뮤니티는 단순한 게시판으로 특별한 기능추가는 없습니다.
            </li>
            <li className="pb-2">
              PG사는 아임포트를 활용하여 개발을 진행하였습니다.
            </li>
            <li className="pb-2">
              예약시스템은 다른 앱들과 크게 다른 점은 없을거라 생각하나, 이 때
              당시 민간 업체의 예약시스템을 개발하는 것이 처음이었던 관계로
              비지니스 로직을 그대로 디지털로 비추는 것에 집중하였습니다.
              <br /> 예를 들어, 부동산 계약 시 가계약 개념과 같이 사용자가
              예약을 시작하면 이를 redis에 기록하여 타 사용자가 해당 날짜에
              예약을 진행할 경우 정원을 미리 체크하여 결제를 불가하게 하며,
              사용자가 결제를 완료하면 예약 확정, DB에 기록하는 방식입니다.
            </li>
            <li className="pb-2">
              특별한 기능이 있는 어플은 아니기에 크게 어려움을 겪은 부분은
              없었습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
