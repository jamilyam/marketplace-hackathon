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


const INIT_STATE = {
  data: [],
  loading: false,
  error: null,
  totalCount: 0,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  order: null,
  orders:[],
};

const ProductsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        totalCount: action.payload.total,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    case ADD_ITEM_TO_CART:
    case REMOVE_ITEM_FROM_CART:
    case CLEAR_CART:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return { ...state, cart: action.payload };

    case CREATE_ORDER:
      return {...state, order: action.payload };
    case CLEAR_ORDER:
      return {...state, order: null };
    case FETCH_ORDERS:
      return {...state, orders: action.payload };

    default:
      return state;
  }
};

export default ProductsReducer;



