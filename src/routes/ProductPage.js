import React from "react";
import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";
import FormEdit from "../components/FormEdit";


export default function ProductPage() {
  return (
    <Container maxWidth="md">
      <FormEdit/>
      <ProductList/>
    </Container>
  );
}
