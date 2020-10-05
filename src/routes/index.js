import React, { lazy, Suspense } from "react";
import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "../components/layouts/Layout";

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

export const PrivateRoute = (props) => {
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
const MyOrder = lazy(() => import("./MyOrder"));
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
          <PrivateRoute exact path="/">
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/contacts">
            <Layout>
              <Contacts />
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <Layout>
              <Admin />
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/myorder">
            <Layout>
              <MyOrder />
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/myorder">
            <Layout>
              <OrderForm  />
            </Layout>
          </PrivateRoute>

          <Route exact path="/auth/login">
            <Login />
          </Route>

          <Route exact path="/auth/register">
            <Register />
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
