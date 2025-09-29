import {css, Theme, useTheme} from "@emotion/react";
import { Button } from "@heroui/react";
import { ReactElement, ReactNode } from "react";
import styled from "@emotion/styled";

export interface FuncItemProps {
    className?: string;
    label: ReactNode;
    isActive?: boolean;
    func: () => void;
    inActiveBackgroundColor?: string;
    activeBackgroundColor?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
}

export function FuncItem(props: FuncItemProps): ReactElement {
    const { className, label, func, ...other } = props;
    const theme = useTheme();

    return (
        <StyledFuncButton
            theme={theme}
            className={className}
            onClick={func}
            {...other}
        >
            {label}
        </StyledFuncButton>
    );
}

export const StyledFuncButton = styled(Button)<{
    theme: Theme;
}>(
    ({ theme }) => css`
        
    font-family: ${theme.mode.font.button};
    font-weight: 800;
    background-color: ${theme.mode.buttonBackground};

    color: ${theme.mode.textPrimary};

    &:hover {
      background-color: ${theme.mode.buttonActiveBackground};
    }

    &:focus {
      outline: none;
    }

    transition: background 0.8s;
  `,
);
