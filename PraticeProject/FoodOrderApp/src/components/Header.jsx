import logoImg from "../assets/logo.jpg";
import Button from "./Button.jsx";
import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";
import UserProgressContext from "../Store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + (Number(item.quantity) || 0);
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>ReactFood</h1>
      </div>
      <p></p>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
