import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../Api/baseUrl";
import axios from "axios";
import Card from "../../components/marketCard";
import Col from "../../components/Column";
import useWindowDimensions from "../../hooks/Dimension";
import Loading from "../../components/marketCard/loading";
import { WebsocketContext } from "../../App";
import Pagination from "../../components/Pagination";
const Markets = () => {
  const websocket = useContext(WebsocketContext);
  const { width } = useWindowDimensions();
  const [markets, setMarkets] = useState([]);
  const [marketPage, setMarketPage] = useState();
  const [price, setPrice] = useState([]);
  const [page, setPage] = useState(1);
  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      return setMarkets(res.data.results);
    });
  }, []);
  useEffect(() => {
    if (markets.length > 0 && page * 20 < markets.length) {
      setMarketPage(markets.slice((page - 1) * 20, page * 20));
    }
  }, [markets, page]);
  console.log(marketPage);
  websocket.onmessage = (e) => {
    setPrice(Object.values(JSON.parse(e.data)));
  };
  return markets && markets.length > 0 && marketPage ? (
    <>
      {marketPage.map((item, index) => (
        <Col
          span={
            width > 1360 ? "4" : width > 1100 ? "3" : width > 900 ? "2" : "1"
          }
          gutter={16}
          key={index}
        >
          <Card item={item} update={price[index]} />
        </Col>
      ))}
      <Pagination page={page} setPage={setPage} />
    </>
  ) : (
    mock.map((index) => (
      <Col
        key={index}
        span={width > 1360 ? "4" : width > 1100 ? "3" : width > 900 ? "2" : "1"}
        gutter={16}
      >
        <Loading />
      </Col>
    ))
  );
};

export default Markets;
