import { Container, Description, Language } from "./Base";
import { useTheme } from "@emotion/react";
import { ContentsContainer, ContentsTitle } from "../../component/layouts";

export function UAnalyzer(props: { language: Language }) {
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
            U Analyzer is one of the core projects of Nexus. It is an
            application designed to efficiently manage counselor training,
            performance evaluation, and related operations. <br />
            The client was built using Java Thymeleaf, the main API was
            developed with Java Spring Boot, and the real-time counseling
            assistance and evaluation API was implemented in Python Django.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            I was responsible for developing the NLP-based real-time counseling
            assistance module of U Analyzer. <br />
            My contribution, excluding the core module, was approximately 10%.
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            NLP-Based Evaluation Development
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              Although the STT (Speech-to-Text) module had already been
              developed, my role was to extract key words from real-time STT
              transcripts and provide related explanations or references to
              previous counseling sessions to assist counselors during live
              conversations.
            </li>
            <li className="pb-2">
              The main libraries used were <strong>MeCab</strong> and{" "}
              <strong>Eunjeon (은전한닢)</strong>. <br />
              MeCab is a morphological analysis library originally developed for
              Japanese, and Eunjeon is a sub-library that enables MeCab to be
              used effectively for the Korean language.
            </li>
            <li className="pb-2">
              Real-time STT transcripts were analyzed via socket communication.
              Each utterance was processed using morphological analysis and
              custom dictionaries developed in collaboration with counselors.
              <br />
              The analyzed words, their contextual meanings, and related past
              counseling records were stored in MongoDB, enabling counselors to
              quickly reference relevant information during real-time sessions.
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
            U Analyzer は Nexus の主要プロジェクトの一つであり、
            カウンセラーの研修、能力評価などを効率的に管理するためのアプリです。
            <br />
            クライアントは Java Thymeleaf を使用し、メイン API は Java Spring
            Boot、リアルタイム相談支援および評価 API は Python Django
            で実装しました。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            U Analyzer において、NLP（自然言語処理）を用いた
            リアルタイム相談支援モジュールの開発を担当しました。
            <br />
            コア部分を除いた開発貢献度はおよそ 10％ です。
          </span>
        </Description>
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>

      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            NLP ベース評価開発
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              STT（音声認識）は既に開発済みであったため、私が担当した部分は、
              リアルタイムで出力される STT 文字列から重要な単語を抽出し、
              相談中に関連用語の説明や過去の相談内容を参照できるようにする機能です。
            </li>
            <li className="pb-2">
              主に使用したライブラリは <strong>MeCab</strong> と{" "}
              <strong>Eunjeon（銀の一葉）</strong> です。
              <br />
              MeCab は日本語向けの形態素解析ライブラリであり、 Eunjeon
              はそれを韓国語向けに拡張して利用できるようにした
              サブライブラリです。
            </li>
            <li className="pb-2">
              リアルタイムで出力される STT データをソケット通信で受信し、
              カウンセラーの意見を基に作成した独自辞書を使用して形態素解析を行いました。
              <br />
              各単語の意味や過去の相談記録などの関連情報を MongoDB
              に保存し、カウンセラーが即座に内容を参照できるようにしました。
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
            U Analyzer는 Nexus의 핵심 프로젝트 중 하나로 상담사의 교육훈련,
            능력평가 등을 효율적으로 관리해주는 App입니다.
            <br />
            Client는 Java thymeleaf 를 사용하였으며, 메인 API는 Java SpringBoot,
            실시간 상담 보조 및 평가 API python Django 입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Project Contribution</ContentsTitle>
        <Description>
          <span className="text-2xl">
            UAnalyzer의 NLP 기반 실시간 상담보조 파트를 맡아 개발하였으며,{" "}
            <br />
            개발 기여도는 Core 를 제외하면 10%입니다.
          </span>
        </Description>
      </ContentsContainer>
      <ContentsContainer>
        <ContentsTitle theme={theme}>Main Task</ContentsTitle>
      </ContentsContainer>
      <ContentsContainer>
        <Description>
          <ContentsTitle fontSize={2.4} theme={theme}>
            NLP Base Evaluation Develop
          </ContentsTitle>
          <ul className="text-left text-2xl list-[unset] pl-[14px]">
            <li className="pb-2">
              NLP라고 해도 STT 는 이미 제작된 버전이 있어, 제가 담당한 부분은
              실시간 STT로 추출된 내용 중 주요 단어들을 추출하여, 상담시 관련
              단어의 설명이나 이전의 내용을 참고 할 수 있도록 제공하는
              부분이었습니다.
            </li>
            <li className="pb-2">
              주로 사용된 라이브러리는 Macab과 은전 한 닢입니다.
              <br />
              Macab는 형태소 분석 라이브러리이며, 은전 한 닢은 일본어 기반인
              macab 를 한국어 기반으로도 사용할 수 있게 해주는 서브
              라이브러리입니다.
            </li>
            <li className="pb-2">
              실시간으로 출력되는 stt 전문을 Socket 통신을 통해 형태소를
              분석하고 상담사들의 조언을 통해 새로 제작한 사전을 통해 형태소를
              분석하고, 각 단어별로 이전의 상담 기록과 단어의 설명을 참고할 수
              있도록 관련 내용을 Moongo DB에 저장하여 상담사는 신속하게 해당
              내용을 참고할 수 있게 합니다.
            </li>
          </ul>
        </Description>
      </ContentsContainer>
    </>
  );
}
