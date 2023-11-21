import React, {useState} from "react";

function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState(false)
  const appClass2 = cartStatus ? "in-cart" : "";

  function clickAddHandler() {
    setCartStatus((prevCartStatus) => !prevCartStatus)
  }

  return (
    <li className={appClass2}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickAddHandler}>{cartStatus ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
