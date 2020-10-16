import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
import { Form, Field } from "react-final-form";
import { Checkbox } from "final-form-material-ui";
import {
  Paper,
  Grid,
  Button,
  FormControlLabel,
  TextareaAutosize,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";


class ProductAddForm extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    onSale: true,
    discountInPercent: "",
    salePrice: "",
    author: "",
    phone: "",
    image: "",
    category: "",
    brand: "",
    gender: "",
    inventory:"",
  };
  handleSubmitOn = (e) => {
    const product = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      onSale: this.state.onSale,
      discountInPercent: this.state.discountInPercent,
      salePrice: this.state.salePrice,
      author: this.state.author,
      phone: this.state.phone,
      image: this.state.image,
      category: this.state.category,
      brand: this.state.brand,
      gender: this.state.gender,
      inventory:this.state.inventory,
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
    };
    this.props.addProduct(product);
    this.setState({
      id: "",
      title: "",
      description: "",
      price: "",
      onSale: true,
      discountInPercent: "",
      salePrice: "",
      author: "",
      phone: "",
      image: "",
      category: "",
      brand: "",
      gender: "",
      inventory:"",
    });
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
        <Form
          onSubmit={this.handleSubmitOn}
          noValidate
          render={({ handleSubmit, reset, submitting, pristine }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="component-simple">
                      Название товара
                    </InputLabel>
                    <Input
                      fullWidth
                      name="title"
                      id="component-simple"
                      value={this.state.title}
                      onChange={this.handleInput}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">Цена</InputLabel>
                    <Input
                      fullWidth
                      name="price"
                      id="component-simple"
                      value={this.state.price}
                      onChange={this.handleInput}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">
                      Цена со скидкой
                    </InputLabel>
                    <Input
                      fullWidth
                      name="salePrice"
                      id="component-simple"
                      value={this.state.salePrice}
                      onChange={this.handleInput}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="component-simple">
                      Описание товара
                    </InputLabel>
                    <TextareaAutosize
                      fullWidth
                      rowsMax={5}
                      name="description"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.description}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="component-simple">Картинка</InputLabel>
                    <Input
                      fullWidth
                      name="image"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.image}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">
                      Категория
                    </InputLabel>
                    <Input
                      fullWidth
                      name="category"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.category}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">Бренд</InputLabel>
                    <Input
                      fullWidth
                      name="brand"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.brand}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">Автор</InputLabel>
                    <Input
                      fullWidth
                      name="author"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.author}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">
                      Количество товара
                    </InputLabel>
                    <Input
                      fullWidth
                      name="inventory"
                      id="component-simple"
                      onChange={this.handleInput}
                      value={this.state.inventory}
                      aria-describedby="component-simple"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      label="onSale"
                      control={
                        <Field
                          name="onSale"
                          component={Checkbox}
                          value={this.state.onSale}
                        />
                      }
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      type="reset"
                      variant="contained"
                      onClick={reset}
                      disabled={submitting || pristine}
                    >
                      Сбросить
                    </Button>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Добавить товар
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
}

const mapStateToProps = (state) => {
  return state.products;
};
export default connect(mapStateToProps, { addProduct })(ProductAddForm);
