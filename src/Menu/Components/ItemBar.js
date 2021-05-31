import React from "react";
import Item from "./Item";

const ItemBar = (props) => {
  return (
    <div>
      <div className="sandwich_title">
        <h2>{props.title}</h2>
      </div>
      <ul className="sandwiches">
        {props.list.map((p) => (
          <Item
            // image={p.image}
            // title={p.title}
            // price={p.price}
            // description={p.description}
            key={p.id}
            product={p}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemBar;
