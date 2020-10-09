import React from "react";
import ProductAddForm from "../components/ProductAddForm";
import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";

export default function Admin() {
  return (
    <Container maxWidth="md">
      <ProductAddForm/>
      <ProductList />
    </Container>
  )
}
