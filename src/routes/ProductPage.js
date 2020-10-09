import React from "react";
// import EditProductDetails from "../components/EditProductDetails";
import { Container } from "@material-ui/core";
import EditProduct from "../components/EditProduct";
import ProductList from "../components/ProductList";


export default function ProductPage() {
  return (
    <Container maxWidth="md">
      <EditProduct/>
      <ProductList/>
    </Container>
  );
}
