import { Modal } from "@mui/material";
import { ReactNode } from "react";
import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useWindowContext } from "../../context/WindowContext";

/** ReactNode를 받아 반응형으로 자녀요소를 모달로 띄우는 컴포넌트입니다.
 * date-area 가 이미 선언되어 있으므로 캘린더 설정 작업을 할때 디자인을 신경쓰지 않아도 됩니다.
 * */
export function CustomModal(props: {
  open: boolean;
  close: () => void;
  children: ReactNode;
  className?: string;
}) {
  const { open, close, children, className } = props;
  const theme = useTheme();

  const { windowHeight } = useWindowContext();
  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AnimatedContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <ModalContainer
            theme={theme}
            className={className}
            height={windowHeight}
          >
            {children}
          </ModalContainer>
        </AnimatedContainer>
      </Modal>
    </>
  );
}

export const ModalContainer = styled.div<{
  theme: Theme;
  height: number;
}>(
  ({ theme, height }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${height}px;
    overflow: scroll;
    color: ${theme.mode.textPrimary};
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    @media ${theme.deviceSize.phone} {
      width: 100%;
    }
  `,
);

const AnimatedContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1300;

  display: flex;
  justify-content: center;
`;
