import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { useState } from "react";

export function HomeButton() {
  const theme = useTheme();
  const [uri] = useState(
    `${window.location.protocol}//${window.location.hostname}:${window.location.port}`,
  );

  return (
    <ChatContainer>
      <DMButton theme={theme}>
        <label onClick={() => window.location.replace(uri)}>
          <StyledHomeIcon fontSize="large" theme={theme} />
        </label>
      </DMButton>
    </ChatContainer>
  );
}

const StyledHomeIcon = styled(HomeIcon)`
  fill: white;
`;

// const NotifyBadge = styled(StyledBadge)`
//   & .${badgeClasses.badge} {
//     font-size: 12px;
//     position: absolute;
//     top: -24px;
//     right: -16px;
//   }
// `;

const DMButton = styled(Button)<{ theme: Theme }>(
  ({ theme }) => css`
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.azureBlue};
    border-radius: 50%;
  `,
);

const ChatContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
`;
