import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { createOrder, clearOrder } from "../../redux/products/actions";
import { removeItemFromCart } from "../../redux/products/actions";
import "./style.css";
import CartItem from "./CartItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      id: Date.now(),
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
  };
  render() {
    const { cartItems, order } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Корзина пуста</div>
        ) : (
          <div className="cart cart-header">
            У вас в корзине {cartItems.length} товаров{" "}
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  {/* <OrderItem order={order} /> */}
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{order.total}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Фото</TableCell>
                    <TableCell>Название</TableCell>
                    <TableCell>Цена</TableCell>
                    <TableCell>Цена со скидкой</TableCell>
                    <TableCell>Кол-во</TableCell>
                    <TableCell>Сумма</TableCell>
                    <TableCell>Удалить</TableCell>
                  </TableRow>
                </TableHead>
                {/* <Fade left cascade> */}
                <TableBody className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem item={item}/>
                  ))}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Итого к оплате:
                    </TableCell>
                    <TableCell>
                      {cartItems.reduce((total, item) => {
                        return (
                          total +
                          (item.salePrice || item.price) * (item.count || 1)
                        );
                      }, 0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* </Fade> */}
          </div>

          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <Button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    color="primary"
                    size="medium"
                    variant="outlined"
                  >
                    Заказать
                  </Button>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>ФИО</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Адрес</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Оформить заказа
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.products.order,
    cartItems: state.products.cart,
  };
};

export default connect(mapStateToProps, {
  removeItemFromCart,
  createOrder,
  clearOrder,
})(Cart);
