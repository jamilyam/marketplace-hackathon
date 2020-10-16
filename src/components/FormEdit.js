import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { editProduct } from "../redux/actions";
import { deleteProduct } from "../redux/actions";
import {
  Button,
  Container,
  FormGroup,
  Grid,
  makeStyles,
  TextField,
  Card,
  CardContent,
} from "@material-ui/core";
import { Formik } from "formik";

const useStyles = makeStyles(() => ({
  btnSubmit: {
    width: "100%",
    margin: "20px 0",
  },
  inp: {
    margin: "10px 0",
  },
  signupLink: {
    display: "block",
    textAlign: "end",
  },
  formWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
}));

export default function FormEdit() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const dispatch = useDispatch();

  const fetchDetails = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      .then((response) => {
        setData(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setSalePrice(response.data.salePrice);
        setCategory(response.data.category);
        setImage(response.data.image);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-danger">Error : {error.message}</h1>;

  const handleChangeProduct = (e) => {
    e.preventDefault();
    dispatch(
      editProduct({
        ...data,
        title,
        description,
        price,
        salePrice,
        category,
        image,
        // updatedAt: new Date().toJSON(),
      })
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(data.id));
  };

  const EditForm = ({ isSubmitting }) => (
    <form onSubmit={handleChangeProduct}>
      <h1>Редактирование</h1>
      <FormGroup>
        <TextField
          label="Название товара"
          className={classes.inp}
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Описание"
          className={classes.inp}
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          label="Цена"
          className={classes.inp}
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Цена со скидкой"
          className={classes.inp}
          type="number"
          name="salePrice"
          onChange={(e) => setSalePrice(e.target.value)}
          value={salePrice}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Категория"
          className={classes.inp}
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Картинка"
          className={classes.inp}
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </FormGroup>

      <Button
        className={classes.btnSubmit}
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting}
      >
        Редактировать
      </Button>
      <Button
        className={classes.btnSubmit}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={handleDelete}
      >
        Удалить
      </Button>
    </form>
  );

  return (
    <div style={{ backgroundColor: "white" }}>
      <Container maxWidth="md">
        <Grid className={classes.formWrapper} container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardContent>
                <Formik>{EditForm}</Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
