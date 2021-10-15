// * node_modules
import React from "react";

// * Styled components
import ButtonComponent from "./styled";

const Button = ({ children, variant, size }) => {
  return (
    <ButtonComponent variant={variant} size={size}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
