import "./styles.css";
import Header from "./header/Header";
import ShoppingList from "./shoppingList/ShoppingList";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import { useState, useEffect } from "react";

export default function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
  return (
    <>
      <Header />
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList className="lmj-layout-inner" addToCart={addToCart} />
      </div>
      <Footer />
    </>
  );
}
