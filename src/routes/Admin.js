import React from "react";
import ProductAddForm from "../components/ProductAddForm";
import { Container, Grid } from "@material-ui/core";
import ProductList from "../components/ProductList";
import Orders from "../components/cart/Orders";


export default function Admin() {
  return (
    <Container maxWidth="md">
      <Grid>
        <Orders />
      </Grid>
      <Grid>
        <ProductAddForm />
      </Grid>
      <ProductList />
    </Container>
  );
}
