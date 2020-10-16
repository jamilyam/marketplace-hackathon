import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  CREATE_ORDER,
  CLEAR_ORDER,
  FETCH_ORDERS,
} from "./constants";
import Axios from "axios";

export const fetchData = (page=1)=>(dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });
  const query = new URLSearchParams(window.location.search);
  query.set("_limit", 6);
  
  Axios.get(process.env.REACT_APP_API_URL + `/products?${query.toString()}`)
    .then(({ data, headers }) => {
      const totalCount = headers["x-total-count"] || data.length
      dispatch(fetchDataSuccess(data, parseInt(totalCount)));
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err));
    })
};

export const fetchDataSuccess = (data, total) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {data, total}
});

export const fetchDataFailed = (err) => ({
  type: FETCH_DATA_FAILED,
  payload: err,
});

export const addProduct = (product) => (dispatch) => {
  Axios.post(process.env.REACT_APP_API_URL + "/products", product)
    .then(() => {
      dispatch(fetchData());
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

export const editProduct = (product, cb = () => {}) => (dispatch) => {
  Axios.patch(
    process.env.REACT_APP_API_URL + "/products/" + product.id,
    product
  )
    .then(() => {
      dispatch(fetchData());
      cb();
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

export const deleteProduct = (id, cb = () => {}) => (dispatch) => {
  Axios.delete(process.env.REACT_APP_API_URL + "/products/" + id)
    .then(() => {
      dispatch(fetchData());
      cb();
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

///cart actions

export const addItemToCart = (item)=> (dispatch, getState)=>{
  const cart = [...getState().products.cart];
  const isInCart = cart.some((cartItem)=>{
    return cartItem.id === item.id;
  });
  if(!isInCart){
    cart.push(item);
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: cart
    })
  };
}

export const removeItemFromCart = (item) => (dispatch, getState) => {
  const cart = getState().products.cart.filter(
    (cartItem) => cartItem.id !== item.id
  );
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: cart
  });
};

export const clearCart = () => ({
  type: CLEAR_CART,
  payload: []
});

///orders

export const createOrder = (order) => (dispatch) => {
  Axios.post(process.env.REACT_APP_API_URL + "/orders", order)
    .then((response) => {
      dispatch({ type: CREATE_ORDER, payload: response.data });
      localStorage.clear("cart");
      dispatch(clearCart());
    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = () => (dispatch) => {
  Axios.get(process.env.REACT_APP_API_URL + "/orders")
    .then((response) => {
      dispatch({ type: FETCH_ORDERS, payload: response.data });
    });
};

