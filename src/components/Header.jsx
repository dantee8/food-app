import { useContext } from "react";
import foodLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartContext = useContext(CartContext);
  const userProgresCtx = useContext(UserProgressContext);
  const totalCartItems = cartContext.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgresCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={foodLogo} alt="" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>
          {" "}
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
