import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";

import {
  AccountBoxRounded,
  CompareRounded,
  ShoppingCartSharp,
} from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import {
  withStyles,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import SearchItem from "./SearchItem";
import TemporaryDrawer from "../routes/Catalog";


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
  
  const [isDrawerOpen, setIsDraweropen] = React.useState(false);

  const toggleDrawer = ()=>setIsDraweropen(!isDrawerOpen);

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("user");
    history.replace("/auth/login");
  };

  const headerBottom = useRef(null);

  // useEffect(()=>{
  //   window.addEventListener("onS")
  //   return ()=>{

  //   }
  // },[])

  return (
    <Container maxWidth="xl" className={styles.header}>
      <div className={styles.headertop}>
        <div className={styles.phone}>
          <span>0777 777 777</span>
        </div>
        <div className={styles.image}>
          <img src="https://assets3.insales.ru/assets/1/3314/888050/1547865036/logo_1.png"></img>
        </div>
        <div className={styles.headercart}>
          <a href="">
            <span>0 сом</span>
            <ColorButton aria-label="login">
              <ShoppingCartSharp />
            </ColorButton>
          </a>
        </div>
      </div>
      <div className={styles.headerbottom}>
        <div className={styles.leftside}>
          <Grid container>
            <Grid item>
              <ColorButton onClick={toggleDrawer}>
                Catalogue
              </ColorButton>
            </Grid>
            <Grid item>
              <ColorButton onClick={() => history.replace("/")}>
                HOME
              </ColorButton>
            </Grid>
            <Grid item>
              <ColorButton onClick={() => history.replace("/about-us")}>
                ABOUT US
              </ColorButton>
            </Grid>
            <Grid item>
              <ColorButton onClick={() => history.replace("/admin")}>
                ADMIN
              </ColorButton>
            </Grid>
            <Grid item>
              <ColorButton onClick={logout}> Log Out </ColorButton>
            </Grid>
          </Grid>
        </div>
        <div className={styles.rightside} flex-xs-7>
          <div className={styles.headersearch}>
            <SearchItem />
          </div>
          <div className={styles.login}>
            <ColorButton aria-label="compare">
              <CompareRounded
                onClick={() => history.replace("/auth/register")}
              />
            </ColorButton>
            <ColorButton aria-label="login">
              <AccountBoxRounded/>
            </ColorButton>
          </div>
        </div>
      </div>

      <TemporaryDrawer isOpen={isDrawerOpen} toggle={toggleDrawer}/>
    </Container>
  );
}
