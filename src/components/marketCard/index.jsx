import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { colors } from "../color";
//style start
const style = (state) => {
  return css`
    direction: rtl;
    padding: 16px;
    border: 1px solid ${colors.divider};
    border-radius: 12px;
    max-width: 300px;
    flex-shrink: 0;
    margin: 0 auto;
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      justify-content: space-between;
    }
    .name {
      display: flex;
      flex: 1 1;
      min-width: 0;
      white-space: nowrap;
      align-items: center;
    }
    .header .sec1 {
      flex-shrink: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header .sec2 {
      flex-shrink: 0;
      margin: 0 8px;
      color: ${colors.textSecondary};
    }
    .header .percent {
      color: ${state ? colors.successMain : colors.errorMain};
      background-color: ${state ? colors.successLighter : colors.errorLighter};
      border-color: ${state ? colors.successLight : colors.errorlight};
      padding: 0 8px;
      border: 1px solid;
      border-radius: 20px;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      direction: ltr;
    }
    .priceRow {
      display: flex;
      padding: 8px 0;
      justify-content: space-between;
    }
    .buyPrice {
      border-bottom: 1px solid ${colors.divider};
    }
    .title {
      color: ${colors.textSecondary};
    }
    .price {
      border-top: 1px solid ${colors.divider};
    }
  `;
};
//style end
const Card = (props) => {
  const [newPrice, setNewPrice] = useState();
  useEffect(() => {
    if (props.update !== "sub to price info") setNewPrice(props.update);
  }, [props.update]);
  return (
    props.item && (
      <div
        className={style(
          props.item.order_book_info.change &&
            props.item.order_book_info.change < 0
            ? false
            : true
        )}
      >
        <div className="header">
          <div className="name">
            <div className="sec1">
              {props.item.currency1 && props.item.currency1.title_fa
                ? props.item.currency1.title_fa
                : "untitle"}
            </div>
            <div className="sec2">
              {props.item.currency1 && props.item.currency1.title
                ? props.item.currency1.title
                : "untitle"}
            </div>
          </div>
          <div className="percent">
            {newPrice
              ? newPrice.change
              : props.item.order_book_info &&
                (props.item.order_book_info.change * 100).toFixed(2)}
            %
          </div>
        </div>
        <div className="buyPrice priceRow">
          <div className="title">بیشترین قیمت</div>
          <div>
            {newPrice
              ? newPrice.max
              : props.item.order_book_info && props.item.order_book_info.min}
          </div>
        </div>
        <div>
          <div className="sellPrice priceRow">
            <div className="title">کمترین قیمت</div>
            <div>
              {newPrice
                ? newPrice.min
                : props.item.order_book_info && props.item.order_book_info.min}
            </div>
          </div>
        </div>
        <div className="price priceRow">
          <div className="title">قیمت لحظه ای</div>
          <div>
            {newPrice
              ? newPrice.price
              : props.item.order_book_info && props.item.order_book_info.price}
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
