import { Button, Container, Grid, IconButton, TextField } from '@material-ui/core';
import { AccountBoxRounded, CompareRounded, ShoppingCartSharp } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("user");
    history.replace("/auth/login");
  }
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
            <IconButton aria-label="login">
              <ShoppingCartSharp />
            </IconButton>
          </a>
        </div>
      </div>
      <div className={styles.headerbottom} maxWidth="md">
        <div className={styles.leftside} maxWidth="md">
          <Grid container>
            <Grid item>
              <Button color="secondary"
                onClick={() => history.replace("/")}>
                HOME
          </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => history.replace("/about-us")}>
                ABOUT US
          </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => history.replace("/about-us")}>
                MY ORDERS
          </Button>
            </Grid>
            <Grid item>
              <Button onClick={logout}>Log Out</Button>
            </Grid>
          </Grid>
        </div>
        <div className={styles.rightside} flex-xs-7>
          <div className={styles.headersearch}>
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
          </div>
          <div className={styles.login}>
            <IconButton aria-label="compare">
              <CompareRounded />
            </IconButton>
            <IconButton aria-label="login">
              <AccountBoxRounded />
            </IconButton>
          </div>
        </div>
      </div>
    </Container>
  )
}