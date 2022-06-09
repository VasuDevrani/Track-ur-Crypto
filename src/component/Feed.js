import React from "react";
import Item from "./Item.js";
import './Feed.css'

export default function Feed(props) {
  return (
    <div className="feed">
      <div className="headTable">
        <div className="tableCont">Name</div>
        <div className="tableCont">Symbol</div>
        <div className="tableCont">Image</div>
        <div className="tableCont">Price</div>
        <div className="tableCont">Mkt Cap</div>
        <div className="tableCont">% Change</div>
      </div>
      {props.curList.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          symbol={item.symbol}
          price={item.current_price}
          volume={item.market_cap}
          priceChange={item.price_change_percentage_24h}
          image={item.image}
        />
        // console.log("hello")
      ))}
    </div>
  );
}
