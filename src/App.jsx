import React, { createContext, useEffect } from "react";
import Markets from "./layout/markets";
import "react-loading-skeleton/dist/skeleton.css";
export const WebsocketContext = createContext();
const App = () => {
  const websocket = new WebSocket("wss://ws.bitpin.org");
  useEffect(() => {
    websocket.onopen = () => {
      websocket.send(JSON.stringify({ method: "sub_to_price_info" }));
    };
  }, [websocket]);

  return (
    <WebsocketContext.Provider value={websocket}>
      <Markets />
    </WebsocketContext.Provider>
  );
};

export default App;
