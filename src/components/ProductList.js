import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/products/actions";

export default function ProductList() {
  const { data, loading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <h1>Fetch data...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <Grid container>
      {data.map((item) => (
        <Grid key={"product-card-" + item.id} item xs={12} md={4}>
          <ProductCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
}
