import styled from "@emotion/styled";
import jp from "../assets/image/japan.png";
import kr from "../assets/image/south-korea.png";
import en from "../assets/image/united-states.png";

export function LanguageButton(props: {
  language: "en" | "jp" | "kr";
  change: (_lang: "en" | "jp" | "kr") => void;
}) {
  const { language, change } = props;
  const lang = () => {
    switch (language) {
      case "en":
        return <img src={en} alt="en" />;
      case "jp":
        return <img src={jp} alt="en" />;
      case "kr":
        return <img src={kr} alt="en" />;
    }
  };

  return (
    <Container>
      <label onClick={() => change(language)}>{lang()}</label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
`;
