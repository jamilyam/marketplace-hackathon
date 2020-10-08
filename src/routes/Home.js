import React from "react";
import { Container } from "@material-ui/core";
import ProductList from "../components/ProductList";
import SlideShow from "../components/Carousel";
import SearchItem from "../components/SearchItem";

export default function Home() {
  return (
    <Container maxWidth="md">
      <SlideShow/>
      <SearchItem/>
      <ProductList />
    </Container>
  );
}
