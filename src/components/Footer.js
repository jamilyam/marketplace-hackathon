import { Button, Container } from '@material-ui/core'
import React from 'react'
import styles from './Header.module.css'
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import classes from './Header.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div maxWidth="md" className={styles.container}>
        <div className={styles.footer_leftside}>
          <div className={styles.footer_logo}>
            <img src="https://assets3.insales.ru/assets/1/3314/888050/1547865036/logo_2.png"></img>
          </div>
          <div className={styles.footer_adress}>
            <div className={styles.footer_phone}> 0777 777 777</div>
            <div className={styles.footer_email}>
              <a href="#">snowboards@gmail.com</a>
            </div>
          </div>
        </div>
        <div className={styles.footer_rightside}>
          <div className={styles.footer_subscribe}>
            <div className={styles.subscribe_title}>Хотите получать новости и быть в курсе акции?</div>
            <div className={styles.subsribe_input}>
              <form className={styles.subscribe_form}>
                <ValidationTextField
                  className={classes.margin}
                  label="Подпись на уведолмения"
                  required
                  variant="outlined"
                  defaultValue="Введите свой Email"
                  id="validation-outlined-input"
                />
                <div className={styles.subscribe_button}>
                  <Button color="secondary">Подписаться</Button>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.footer_menu}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_item}><a href="#">Доставка</a> </li>
              <li className={styles.menu_item}> <a href="#">Обратная связь</a></li>
              <li className={styles.menu_item}><a href="#">Новости</a> </li>
              <li className={styles.menu_item}><a href="#">Личный кабинет</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}