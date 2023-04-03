import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../redux/features/cart/CartSlice";

const Cartitem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeCart({ id: id }));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseAmount({ id, amount }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(decreaseAmount({ id, amount }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default Cartitem;
