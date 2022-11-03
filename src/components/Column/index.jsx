import { css } from "@emotion/css";
import React from "react";
//style start
const style = (span, gutter) => {
  const colWidth = 100 / span;
  return css`
    width: ${colWidth}%;
    display: inline-block;
    margin-bottom: ${gutter}px;
  `;
};
//style end
const Col = (props) => {
  return (
    <span
      className={style(
        props.span ? props.span : 4,
        props.gutter ? props.gutter : 16
      )}
    >
      {props.children}
    </span>
  );
};

export default Col;
