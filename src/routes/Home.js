import React from "react";
import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Container maxWidth="md">
      <ProductList />
    </Container>
  );
}
