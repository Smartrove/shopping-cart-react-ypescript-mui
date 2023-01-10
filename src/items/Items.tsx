import React from "react";
import { Button } from "@mui/material";
import { CartItemType } from "../App";
// import { Wrapper } from "../App.Style";
import { Wrapper } from "./Items.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Items: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{}</h3>
      <p>{item.description}</p>
      <h3>{item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Items;
