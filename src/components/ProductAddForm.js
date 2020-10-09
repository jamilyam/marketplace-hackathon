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
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";


class ProductAddForm extends Component {
  state = {
    title: "",
    description: "",
    price: "",
    onSale: false,
    discountInPercent: "",
    salePrice: "",
    author: "",
    phone: "",
    image: "",
    category: "",
    brand: "",
    gender: "",
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
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
    };
    this.props.addProduct(product);
    this.setState({
      id: "",
      title: "",
      description: "",
      price: "",
      onSale: false,
      discountInPercent: "",
      salePrice: "",
      author: "",
      phone: "",
      image: "",
      category: "",
      brand: "",
      gender: "",
    });
  };
  handleTitle = (e) => {
    const text = e.target.value;
    this.setState({
      title: text,
    });
  };
  handleDesc = (e) => {
    const text = e.target.value;
    this.setState({
      description: text,
    });
  };
  handlePrice = (e) => {
    const text = e.target.value;
    this.setState({
      price: text,
    });
  };
  handleSale = (e) => {
    const text = e.target.value;
    this.setState({
      onSale: true,
    });
  };
  handleSalePrice = (e) => {
    const text = e.target.value;
    this.setState({
      salePrice: text,
    });
  };
  handleImage = (e) => {
    const text = e.target.value;
    this.setState({
      image: text,
    });
  };
  handleCategory = (e) => {
    const text = e.target.value;
    this.setState({
      category: text,
    });
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
                    <InputLabel htmlFor="component-simple">Title</InputLabel>
                    <Input
                      fullWidth
                      id="component-simple"
                      value={this.state.title}
                      onChange={this.handleTitle}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">Price</InputLabel>
                    <Input
                      fullWidth
                      id="component-simple"
                      value={this.state.price}
                      onChange={this.handlePrice}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel htmlFor="component-simple">
                      Sale Price
                    </InputLabel>
                    <Input
                      fullWidth
                      id="component-simple"
                      value={this.state.salePrice}
                      onChange={this.handleSalePrice}
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
                      onChange={this.handleDesc}
                      value={this.state.description}
                      aria-describedby="component-simple"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="component-simple">
                      Image
                    </InputLabel>
                    <Input
                      fullWidth
                      id="component-simple"
                      onChange={this.handleImage}
                      value={this.state.image}
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
  return state.contact;
};
export default connect(mapStateToProps, { addProduct })(ProductAddForm);
