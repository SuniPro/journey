import { Container, Description, Language } from "./Base";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import { useTheme } from "@emotion/react";

export function MarketKully(props: { language: Language }) {
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
            The client was built using React, and the server was developed with
            Java Spring Boot and JPA.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            Our company was commissioned by Market Kurly to develop their
            settlement system. Although it was originally the responsibility of
            Development Team 1, due to a shortage of manpower, I independently
            assisted in part of the server-side development.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Market Kurly Server Development
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              This is an admin system that includes PG integration, sales
              settlement, and statistical analysis functions.
            </li>
            <li className="pb-2">
              I recognized that accurate settlement and statistical calculation
              were the core features of the app. <br />
              To improve the performance of numerical calculations—which took
              considerable processing time—I developed a separate C++-based
              numerical calculation Core API, significantly reducing the return
              time.
            </li>
            <li className="pb-2">
              Java was used mainly as the gateway and for maintaining the core
              system, focusing on security and overall management.
            </li>
            <li className="pb-2">
              The C++ Core API actively utilized DataFrame structures for
              efficient computation.
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
            クライアントは React を使用し、サーバーは Java Spring Boot と JPA
            で開発しました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            当社は Market Kurly（マーケットカーリー）から決済システムの開発を
            依頼されました。
            <br />
            本来は開発第1チームの担当業務でしたが、人員不足のため、
            サーバー側の一部開発を私が単独で補助的に担当しました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Market Kurly サーバー開発
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              このシステムは PG 連携、売上精算、統計分析などの機能を備えた
              管理者向けシステムです。
            </li>
            <li className="pb-2">
              精算および統計アプリの数値計算が本プロジェクトの核心部分であると
              判断しました。
              <br />
              計算結果の返却に時間がかかる問題を改善するため、 C++
              ベースの数値計算コア API を独自に開発し、
              処理速度を大幅に向上させました。
            </li>
            <li className="pb-2">
              Java はゲートウェイおよびセキュリティ、メインシステム維持の役割に
              専念させる構成としました。
            </li>
            <li className="pb-2">
              C++ コア API では DataFrame 構造を積極的に活用し、
              効率的な計算処理を実現しました。
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
            Client는 React를 사용하였으며, Server는 Java SpringBoot, JPA를
            사용하였습니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            마켓컬리의 정산시스템을 회사에서 의뢰받아 개발하게 되었으며, 개발
            1팀 업무 소관이나, 인력 부족 관계로 server 단 일부를 팀에서 저만
            맡아 업무 보조 역할을 진행하였습니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Market Kully Server Develop
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              PG사 연동과 매출 정산, 통계 등의 기능이 있는 Admin 시스템입니다.
            </li>
            <li className="pb-2">
              정산, 통계 App 수치 계산이 핵심이라고 생각했습니다.
              <br />
              따라서, 수치계산의 리턴까지의 소요 시간이 상당한 점을 개선하기위해
              수치계산을 수행하는 C++ 기반 수치계산 Core API를 별도 개발하여,
              리턴 시간을 감소시켰으며,
            </li>
            <li className="pb-2">
              Java는 게이트웨이, 보안 역할 등 메인 시스템 유지 역할만을 유지하게
              하였습니다.
            </li>
            <li className="pb-2">
              C++ Core API DataFrame 을 적극적으로 사용하였습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
