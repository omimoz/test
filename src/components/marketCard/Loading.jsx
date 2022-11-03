import React from "react";
import { css } from "@emotion/css";
import Skeleton from "react-loading-skeleton";
import { colors } from "../color";

//style start
const style = css`
  padding: 16px;
  border: 1px solid ${colors.divider};
  border-radius: 12px;
  max-width: 300px;
  margin: 0 auto;
  .sec1 {
    width: 28%;
    display: inline-block;
  }
  .sec2 {
    width: 20%;
    display: inline-block;
    margin-right: 2%;
  }
  .percent {
    width: 20%;
    display: inline-block;
    float: left;
  }
  .priceRow {
    padding: 8px 0;
  }
  .buyPrice {
    border-bottom: 1px solid ${colors.divider};
  }
`;
//style end
const Loading = () => {
  return (
    <div className={style}>
      <div className="header">
        <div className="name">
          <div className="sec1">
            <Skeleton />
          </div>
          <div className="sec2">
            <Skeleton />
          </div>
          <div className="percent">
            <Skeleton />
          </div>
        </div>
      </div>
      <div className="buyPrice priceRow">
        <div className="title"></div>
        <Skeleton />
      </div>
      <div className="buyPrice priceRow">
        <div className="title"></div>
        <Skeleton />
      </div>
      <div className="price priceRow">
        <div className="title"></div>
        <Skeleton />
      </div>
    </div>
  );
};

export default Loading;
