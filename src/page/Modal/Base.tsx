/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction, useState } from "react";
import { CustomModal } from "../../component/Modal";
import { Suni } from "./Suni";
import { css, useTheme } from "@emotion/react";
import CancelIcon from "@mui/icons-material/Cancel";
import styled from "@emotion/styled";
import { LanguageButton } from "../../component/LanguageButton";
import { Neaco } from "./Neaco";
import { Belleforet } from "./Belleforet";

export type Language = "en" | "jp" | "kr";

export function Base(props: {
  open: boolean;
  close: () => void;
  selectedState: {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
  };
  link?: string;
}) {
  const { open, close } = props;
  const { selected } = props.selectedState;
  const theme = useTheme();

  const [language, setLanguage] = useState<Language>("en");

  const languageChange = (lang: "en" | "jp" | "kr") => {
    if (lang === "en") {
      setLanguage("jp");
    } else if (lang === "jp") {
      setLanguage("kr");
    } else {
      setLanguage("en");
    }
  };

  const components = () => {
    switch (selected) {
      case "Suni.":
        return <Suni language={language} />;
      case "Neaco":
        return <Neaco language={language} />;
      case "BelleForetResort":
        return <Belleforet language={language} />;
    }
  };

  return (
    <>
      <CustomModal open={open} close={close}>
        <CancelBox>
          <CancelIcon onClick={close} sx={{ fontSize: "30px" }} />
        </CancelBox>
        <LanguageButton
          language={language}
          change={() => languageChange(language)}
        />
        <div
          css={css`
            width: 90%;
            margin: 5% 0 5%;
            padding: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-color: ${theme.mode.cardBackground};
            border-radius: ${theme.borderRadius.roundedBox};
          `}
        >
          <div
            css={css`
              height: 100%;
              background-color: ${theme.mode.cardBackground};
            `}
          >
            {components()}
          </div>
        </div>
      </CustomModal>
    </>
  );
}
const CancelBox = styled.div`
  position: fixed;
  top: 7%;
  right: 6.5%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const Description = styled.div(
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
