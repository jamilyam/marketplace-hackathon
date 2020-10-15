import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import Cart from "../components/cart/Cart";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "30px",
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid>
        <Cart/>
      </Grid>
    </Container>
  );
}

