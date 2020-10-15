import React from "react";
import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";
import SlideShow from "../components/Carousel";

export default function Home() {
  return (
    <>
    <div>
    <SlideShow/>
    </div>
    <Container maxWidth="md">
      <ProductList />
    </Container>
    </>
  );
}
