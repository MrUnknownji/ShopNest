import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  deleteFromCart,
  calculatePrice,
} from "../redux/reducers";
import { Button } from "@mui/material";
import Checkout from "./Checkout";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const popUpHandler = () => {
    setShowCart(!showCart);

    // Use setTimeout to ensure that the DOM update has occurred before changing the overflow
    setTimeout(() => {
      document.body.style.overflow = showCart ? "auto" : "hidden";
    }, 0);
  };

  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const increment = (item) => {
    dispatch(addToCart(item));
    dispatch(calculatePrice());
  };

  const handleDecrement = (item) => {
    dispatch(decrement(item.id));
    dispatch(calculatePrice());
  };

  const deleteHandler = (item) => {
    dispatch(deleteFromCart(item.id));
    dispatch(calculatePrice());
  };

  return (
    <div className="cart">
      <main>
        {Object.keys(cartItems).length > 0 ? (
          Object.values(cartItems).map((item) => (
            <CartItem
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              id={item.id}
              key={item.id}
              decrement={() => handleDecrement(item)}
              increment={() => increment(item)}
              deleteHandler={() => deleteHandler(item)}
            />
          ))
        ) : (
          <h1
            style={{
              margin: "0px auto",
              display: "block",
              width: "fit-content",
            }}
          >
            No Items Yet
          </h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
        <Button variant="contained" onClick={popUpHandler}>
          Buy Now
        </Button>
      </aside>

      {showCart && <Checkout popUpHandler={popUpHandler} />}
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <DeleteIcon onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
