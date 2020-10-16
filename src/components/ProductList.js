import React, { useEffect, useMemo } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/products/actions";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useLocation } from "react-router-dom";


export default function ProductList() {
  const { data, loading, error, totalCount } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const location = useLocation();
  
  const query = new URLSearchParams(location.search);
  const page = query.get("_page") || 1;

  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, location.search])

  if (loading) {
    return <h1>Fetch data...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <>
    <Grid container>
      {data.map((item) => (
        <Grid key={"product-card-" + item.id} item xs={12} md={4}>
          <ProductCard data={item} />
        </Grid>
      ))}
    </Grid>
    <Grid>
        <Pagination
          count={Math.ceil(totalCount/6)}
          page={parseInt(page)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/?_page=${item.page}`}
              {...item}
            />
          )}
          />
    </Grid>
    </>
  );
}
