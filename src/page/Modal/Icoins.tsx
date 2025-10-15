import { Container, Description, Language } from "./Base";
import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";
import Button from "@mui/material/Button";

export function Icoins(props: { language: Language; link?: string }) {
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
            Icoins is a personal cryptocurrency trading system. <br />
            The client was developed with React, while the main system API was
            built using Java Spring Boot 3. <br />
            The Core API, responsible for cryptocurrency transactions and
            transaction history, was developed using Node.js and Express. <br />
            CI/CD follows a GitHub Actions → Docker → Jenkins → EC2 pipeline
            structure. <br />
            Supported cryptocurrencies include <strong>ETH</strong>,{" "}
            <strong>BTC</strong>, and <strong>USDT</strong>.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            This was a solo project — I handled all aspects from planning and
            design to full development and deployment.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Wallet Creation
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              For USDT, I used <strong>TronWeb</strong>, <strong>BIP39</strong>,
              and <strong>BIP32</strong> libraries. <br />
              The wallet issuance function was designed to mimic real-world
              person-to-person exchanges — where no intermediary or centralized
              service is required.
            </li>
            <li className="pb-2">
              Wallet encryption is handled through <strong>KMS/HSM</strong>.
              Users can receive a wallet upon basic identity verification such
              as name, national ID, or passport number.
            </li>
            <li className="pb-2">
              Each user can generate separate wallets for different
              cryptocurrencies. This enables coin transactions between users by
              searching for their wallet IDs directly.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Transaction
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              This feature allows users to check their transaction history for
              each supported cryptocurrency.
            </li>
            <li className="pb-2">
              In line with blockchain’s transparency principles, both personal
              and external transaction histories are publicly viewable. <br />
              This design allows creditors, for example, to verify a debtor’s
              current wallet balance or repayment intent during peer-to-peer
              lending scenarios.
            </li>
            <li className="pb-2">
              Future updates will include a personal lending feature — aiming to
              expand the system into a structure similar to traditional banking
              systems.
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Admin
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              The Admin Page allows administrators to manage both users and
              wallets.
            </li>
            <li className="pb-2">
              For organizations managing large-scale assets, this system can be
              used for services such as cryptocurrency loans, product sales, or
              payment tracking. <br />
              Notifications are automatically sent for deposits and withdrawals,
              and both creditors and debtors receive alerts according to loan
              deadlines to review repayment status and due dates.
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
            Icoins は個人向けの暗号資産（仮想通貨）取引システムです。
            <br />
            クライアントは React で開発し、メインシステム API は Java Spring
            Boot 3 を使用しています。
            <br />
            暗号通貨の取引および取引履歴を管理するコア API は Node.js（Express）
            で構築しました。
            <br />
            CI/CD パイプラインは GitHub Actions → Docker → Jenkins → EC2
            の構成です。
            <br />
            対応する通貨は <strong>ETH</strong>、<strong>BTC</strong>、
            <strong>USDT</strong> です。
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
            ウォレット作成機能
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              USDT の場合、使用したライブラリは <strong>TronWeb</strong>、
              <strong>BIP39</strong>、<strong>BIP32</strong> です。
              <br />
              ウォレット発行機能は、人から人へ直接渡す現実世界の取引を再現する
              ことを目的として設計されており、中継サーバーや仲介者を必要としません。
            </li>
            <li className="pb-2">
              ウォレットの暗号化には <strong>KMS/HSM</strong> を使用しました。
              <br />
              ユーザーは氏名、住民登録番号、パスポート番号などの簡単な本人確認を
              経てウォレットを発行できます。
            </li>
            <li className="pb-2">
              各ユーザーは通貨ごとに異なるウォレットを発行でき、 ID
              検索を通じてユーザー間でのコイン取引が可能です。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            取引（Transaction）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              各ユーザーやサポートされる通貨の取引履歴を確認できる機能です。
            </li>
            <li className="pb-2">
              ブロックチェーンおよび暗号通貨の「情報は公開される」という
              特性に基づき、本人および他人の取引履歴を参照できるようにしました。
              <br />
              例えば、ユーザー間で貸付取引を行う際、債権者が相手のウォレット履歴を
              確認し、返済意思を判断できるように設計しました。
            </li>
            <li className="pb-2">
              今後は個人向け融資機能も追加し、銀行システムに近いレベルまで
              発展させることを検討しています。
            </li>
          </ul>
        </Description>

        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            管理者ページ（Admin）
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              ユーザーおよびウォレットを管理するための管理者ページです。
            </li>
            <li className="pb-2">
              大規模資産を保有する企業が本システムを利用することを想定し、
              商品販売や暗号通貨の貸付機能をサポートしています。
              <br />
              入出金が発生した場合は即時通知が送信され、債権者および債務者は
              返済期限に応じて通知を受け取り、現在の貸付状況と入金日を確認できます。
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
            Icoins는 개인 코인 거래 시스템입니다.
            <br />
            client 는 react, server 는 메인 시스템 API는 Java SpringBoot 3,
            암호화폐 거래, 내역을 확인할 수 있게 하는 Core API는 Node
            NodeExpress 를 사용합니다.
            <br />
            CI-CD는 Git Action - Docker - Jenkins - EC2 Pip line 형태입니다.
            <br />
            지원하는 화폐는 ETH, BTC, USDT 입니다.
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
            Wallet Create
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              USDT의 경우 사용했던 라이브러리는 tronweb, bip39, bip32 입니다.
              <br />
              개인 지갑 발급 기능이 필요한 기능은 서로 손에서 손으로 건내주는
              현실의 상황을 그대로 재현하기 위해서는 <br /> 중계소나 매개체가
              전혀 필요하지 않기 때문입니다.
            </li>
            <li className="pb-2">
              지갑 암호화는 KMS/HSM 을 사용하였으며, 사용자는 이름,
              주민등록번호, 여권번호 등 간단한 신원만 확인되면 바로 지갑을
              발급받을 수 있습니다.
            </li>
            <li className="pb-2">
              유저는 각 코인별로 지갑을 발급받을 수 있으며, 이를 통해 특정
              아이디를 검색해서 사용자간에 코인 거래를 가능하게 합니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Transaction
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              각 사용자 혹은, 지원하는 화폐들의 거래내역을 확인할 수 있는
              기능입니다.
            </li>
            <li className="pb-2">
              모든 정보는 공개된다는 블록체인-암호화폐의 기본 특성에 따라 구현한
              기능이며, 이를 통해 본인의 거래내역과 타인의 거래내역을 모두
              확인할 수 있습니다.
              <br /> 사용자간에 거래를 할 때 상대방에게 화폐를 대출하는 등의
              상황에서 현재 지갑의 내역을 채권자가 확인하고 채무 이행 의지가
              있는지 확인 할 수 있어야 한다는 생각으로 구현한 기능입니다.
            </li>
            <li className="pb-2">
              추후, 개인 대출 기능도 작성하여 은행 시스템과 유사한 수준까지
              빌드하는 것을 고려하고 있습니다.
            </li>
          </ul>
        </Description>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            Admin
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              사용자를 관리하고 지갑을 관리할 수 있는 Admin Page입니다.
            </li>
            <li className="pb-2">
              대규모 자산을 보유한 회사들이 해당 시스템을 사용할 경우,
              사용자에게 돈을 받고 특정 물건을 보내주거나, 암호화폐를 대출하거나
              하는 기능을 생각하여, 화폐가 입금 될 경우 혹은 출금 될 경우 알림
              시스템이 즉각 알림을 보내주고, <br /> 대출 기한에 따라 채권자,
              채무자는 알림을 받아 현재 대출 상황을 확인하고 입금 일자를 확인할
              수 있습니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
