import React from "react";
import { css } from "@emotion/css";
//style start
const style = (page) => {
  return css`
    display: flex;
    justify-content: center;
    .btn {
      background: #ffffff;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      padding: 0px 10px;
      font-size: 18px;
      cursor: pointer;
    }
    .current {
      background: #ffffff;
      border-radius: 2px;
      padding: 0px 10px;
      font-size: 18px;
    }
    .back {
      color: ${page === 1 ? "#D9D9D9" : "black"};
    }
  `;
};
//style end
const Pagination = (props) => {
  return (
    <div className={style(props.page)}>
      <div
        className="btn back"
        onClick={() => {
          props.page > 1 && props.setPage(props.page - 1);
        }}
      >
        {"<"}
      </div>
      <div className="current">{props.page}</div>
      <div
        onClick={() => {
          props.setPage(props.page + 1);
        }}
        className="btn"
      >
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
