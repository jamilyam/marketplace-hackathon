import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { editProduct } from '../redux/actions';
import { deleteProduct } from "../redux/actions";
import { Form, Field } from "react-final-form";
import { Checkbox } from "final-form-material-ui";
import { Paper, Grid, Button, FormControlLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

export default function EditProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();
  const dispatch = useDispatch();

  const fetchDetails = ()=>{
    Axios.get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      .then((response)=>{
        setData(response.data)
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImage(response.data.salePrice);
        setSalePrice(response.data.salePrice);
      })
      .catch(setError)
      .finally(()=>setLoading(false))
  }

  useEffect(()=>{
    fetchDetails();
  }, [params]);

  if(loading) return(
    <h1>Loading...</h1>
  )
  if(error) return(
    <h1 className="text-danger">Error : {error.message}</h1>
  )

  const handleChangeProduct=(e)=>{
    dispatch(editProduct({
      ...data,
      id:data.id,
      title:data.title,
      description:data.description,
      price:data.price,
      salePrice:data.salePrice,
      image:data.image,
    }));
  }
    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteProduct(data.id));
    };


  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Form
        onSubmit={handleChangeProduct}
        noValidate
        render={({ handleSubmit, reset, submitting, pristine }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <InputLabel htmlFor="component-simple">Title</InputLabel>
                  <Input
                    fullWidth
                    id="component-simple"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-describedby="component-simple"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="component-simple">Price</InputLabel>
                  <Input
                    fullWidth
                    id="component-simple"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    aria-describedby="component-simple"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="component-simple">Sale Price</InputLabel>
                  <Input
                    fullWidth
                    id="component-simple"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    aria-describedby="component-simple"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="component-simple">
                    Description
                  </InputLabel>
                  <Input
                    fullWidth
                    id="component-simple"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    aria-describedby="component-simple"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="component-simple">Image</InputLabel>
                  <Input
                    fullWidth
                    id="component-simple"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    aria-describedby="component-simple"
                  />
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}