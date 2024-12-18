import { useContext } from "react";
import Modal from "./Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./Button.jsx";
import UserProgressContext from "../Store/UserProgressContext.jsx";
import CartItems from "./CartItems.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    console.log("checkout");
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
      open={userProgressCtx.progress === "cart"}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 ? (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        ) : null}
      </p>
    </Modal>
  );
}
