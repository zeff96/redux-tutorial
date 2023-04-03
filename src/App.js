import Navbar from "./components/NavBar";
import Cartcontainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./redux/features/cart/CartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div>
      <Navbar />
      <Cartcontainer />
    </div>
  );
};

export default App;
