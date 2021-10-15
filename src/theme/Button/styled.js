// * node_modules
import styled, { css } from "styled-components";

// * Handlers
const detectVariant = (variant) => {
  const cssObjMap = {
    contained: () => css`
      background-color: ${({ theme }) => theme.colors.lightPurple};
      /* border: 1px solid ${({ theme }) => theme.colors.darkBlack}; */
      border: none;
      color: ${({ theme }) => theme.colors.mainWhite};
    `,
    outline: () => css`
      background-color: ${({ theme }) => theme.colors.darkBlack};
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.mainWhite};
    `,
  };
  return cssObjMap[variant];
};

const detectWidth = (size) => {
  switch (size) {
    case "small":
      return "100px";
    case "medium":
      return "130px";
    case "large":
      return "150px";
    default:
      return "100px";
  }
};

// * Components
const ButtonComponent = styled.button`
  border-radius: 15px;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  min-width: ${({ size }) => detectWidth(size)};
  ${({ variant }) => detectVariant(variant)};

  &:hover {
    opacity: 0.8;
  }
`;

export default ButtonComponent;
