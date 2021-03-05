import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

export type Props = {
  children?: string;
  href?: string;
  onClick?: () => void;
  widthStyle?: "S" | "M" | "L";
};

export const Button: React.FC<Props> = ({
  children,
  href,
  widthStyle,
  onClick,
}) => {
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(false);
  useEffect(() => {
    console.log("aaa" + isDisabledButton);
    if (!isDisabledButton) {
      return undefined;
    }
    console.log("bbb" + isDisabledButton);
    const isDisabledButtonTimer = setTimeout(() => {
      setIsDisabledButton(false);
      console.log("ccc" + isDisabledButton);
    }, 2000);
    return () => {
      console.log("ddd" + isDisabledButton);
      clearTimeout(isDisabledButtonTimer);
      setIsDisabledButton(false);
    };
  }, [isDisabledButton]);

  const handleButtonClick = useCallback(() => {
    console.log(1);
    setIsDisabledButton(true);
    if (href !== undefined) {
      window.open(href);
    }
  }, [href]);
  console.log(isDisabledButton);

  return (
    <>
      <StyledButton
        widthStyle={widthStyle}
        isDisabled={isDisabledButton}
        onClick={handleButtonClick}
      >
        {children}
      </StyledButton>

      <button></button>
    </>
  );
};

const StyledButton = styled.button<
  Pick<Props, "widthStyle"> & {
    isDisabled: boolean;
  }
>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
  ${({ widthStyle }) =>
    widthStyle === "S"
      ? css`
          width: 50px;
        `
      : widthStyle === "M"
      ? css`
          width: 100px;
        `
      : widthStyle === "L"
      ? css`
          width: 150px;
        `
      : css`
          width: 200px;
        `}
`;
