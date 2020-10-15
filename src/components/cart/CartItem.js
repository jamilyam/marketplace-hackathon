import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeItemFromCart } from "../../redux/products/actions";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item));
  };
  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        <img src={item.image} alt={item.title}></img>
      </TableCell>
      <TableCell component="th" scope="row">
        {item.title}
      </TableCell>
      <TableCell align="right">{item.price}</TableCell>
      <TableCell align="right">{item.salePrice}</TableCell>
      <TableCell align="right">{item.count || 1}</TableCell>
      <TableCell align="right">
        {(item.salePrice || item.price) * (item.count || 1)}
      </TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleRemoveFromCart}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
