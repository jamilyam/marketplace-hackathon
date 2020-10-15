import React, { lazy, Suspense } from "react";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import ProductPage from "./ProductPage";
import ProductList from "../components/ProductList";

export const getLoggedInUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

export const isUserAuth = () => {
  const user = getLoggedInUser();
  if (!user) {
    return false;
  }
  return true;
};

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

///?Pages
const Home = lazy(() => import("./Home"));
const Contacts = lazy(() => import("./Contacts"));
const Admin = lazy(() => import("./Admin"));
const ShoppingCart = lazy(() => import("./ShoppingCart"));
const OrderForm = lazy(() => import("./OrderForm"));

///?Auth pages
const Login = lazy(() => import("./auth/Login"));
const Logout = lazy(() => import("./auth/Logout"));
const Register = lazy(() => import("./auth/Register"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route exact path="/products">
            <Layout>
              <ProductList />
            </Layout>
          </Route>

          <PrivateRoute exact path="/products/:id">
            <Layout>
              <ProductPage />
            </Layout>
          </PrivateRoute>

          <Route exact path="/contacts">
            <Layout>
              <Contacts />
            </Layout>
          </Route>

          <PrivateRoute exact path="/admin">
            <Layout>
              <Admin />
            </Layout>
          </PrivateRoute>

          <Route exact path="/shopping-cart">
            <Layout>
              <ShoppingCart />
            </Layout>
          </Route>

          <PrivateRoute exact path="/order-form">
            <Layout>
              <OrderForm />
            </Layout>
          </PrivateRoute>

          <Route exact path="/auth/login">
            <Layout>
              <Login />
            </Layout>
          </Route>

          <Route exact path="/auth/register">
            <Layout>
              <Register />
            </Layout>
          </Route>

          <Route exact path="/auth/logout">
            <Logout />
          </Route>

          <Route>
            <Layout>
              <div style={{ height: "100vh" }}>
                <h1>Ошибка: 4040. Страница не найдена.</h1>
              </div>
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routes;
