import React from "react";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

export default function ShoppingIcon(){

  const history = useHistory();

  const cartItemsCount = useSelector((state) => {
    return state.products.cart.length;
  });

  return (
    <MenuItem>
      <IconButton
        color="inherit"
        onClick={() => history.replace("/shopping-cart")}
      >
        <Badge badgeContent={cartItemsCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <p>Cart</p>
    </MenuItem>
  );
};

