import {
  Button,
  Container,
  Grid,
} from "@material-ui/core";

import {
  AccountBoxRounded,
  CompareRounded,
} from "@material-ui/icons";
import React from "react";

import { withStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import SearchItem from "./SearchItem";
import ShoppingIcon from "./ShoppingIcon";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "transparent",
    "&:hover": {
      color: "orange",
    },
  },
}))(Button);

export default function Header() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.replace("/auth/login");
  };

  return (
    <Container maxWidth="xl" className={styles.header}>
      {" "}
      <div className={styles.headertop}>
        {" "}
        <div className={styles.phone}>
          {" "}
          <span>0777 777 777</span>{" "}
        </div>{" "}
        <div className={styles.image}>
          {" "}
          <img src="https://assets3.insales.ru/assets/1/3314/888050/1547865036/logo_1.png" alt="header"></img>{" "}
        </div>{" "}
        <div className={styles.headercart}>
          
            <span>0 сом</span>{" "}
            <ColorButton aria-label="login">
              {" "}
              <ShoppingIcon />{" "}
            </ColorButton>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.headerbottom} maxWidth="md">
        {" "}
        <div className={styles.leftside} maxWidth="md">
          {" "}
          <Grid container>
            {" "}
            <Grid item>
              {" "}
              <ColorButton onClick={() => history.replace("/")}>
                {" "}
                HOME{" "}
              </ColorButton>{" "}
            </Grid>{" "}
            <Grid item>
              {" "}
              <ColorButton onClick={() => history.replace("/shopping-cart")}>
                {" "}
                ABOUT US{" "}
              </ColorButton>{" "}
            </Grid>{" "}
            <Grid item>
              {" "}
              <ColorButton onClick={() => history.replace("/admin")}>
                {" "}
                ADMIN{" "}
              </ColorButton>{" "}
            </Grid>{" "}
            <Grid item>
              {" "}
              <ColorButton onClick={logout}> Log Out </ColorButton>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </div>{" "}
        <div className={styles.rightside} flex-xs-7>
          {" "}
          <div className={styles.headersearch}>
            {" "}
            <SearchItem />{" "}
          </div>{" "}
          <div className={styles.login}>
            {" "}
            <ColorButton aria-label="compare">
              {" "}
              <CompareRounded
                onClick={() => history.replace("/auth/register")}
              />{" "}
            </ColorButton>{" "}
            <ColorButton aria-label="login">
              {" "}
              <AccountBoxRounded
                onClick={() => history.replace("/auth/login")}
              />{" "}
            </ColorButton>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Container>
  );
}
