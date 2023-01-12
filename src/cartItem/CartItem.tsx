import { Button } from "@mui/material";

//Types
import { CartItemType } from "../App";
import Items from "../items/Items";

//Styles

import { Wrapper } from "./CartItem.style";

type Props = {
  items: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ items, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{items.title}</h3>
      <div className="information">
        <p>Price: ${items.price}</p>
        <p>Total: ${(items.amount * items.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(items.id)}
        >
          -
        </Button>
        <p>{items.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(items)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={items.image} alt={items.title} />
  </Wrapper>
);

export default CartItem;
