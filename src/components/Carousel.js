import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, CardMedia, Grid, Typography, makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  banner: {
    // height: "400px",
    position: "relative",
    // width: "100vw",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "cover",
    position: "relative",
  },
  mediaCaption:{
    textOverflow: "ellipsis",
    position: "absolute",
    bottom: 20,
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    opacity: 0.6,
    width: "100%",
    height: "30%",
  },
  viewButton:{
    color: "white",
    border: "3px solid white",
    textTransform: "capitalize",
    transition: "200ms",
  },
}));
export default function SlideShow(props) {
  var items = [
    {
      name: "Распродажа",
      description: "Специальное предложение на сноуборд СНОУБОРД BURTON CLASH за 8000 сом",
      image: "https://assets3.insales.ru/assets/1/3314/888050/1547865036/header_slide_1-loaded.jpg",
    },
    {
      name: "Новинка",
      description: "СНОУБОРД BLACK FIRE FIRE за 14000 сом",
      image: "https://assets3.insales.ru/assets/1/3314/888050/1547865036/header_slide_2-loaded.jpg",
    },
    {
      name: "Акция",
      description: "Акция на все модели СНОУБОРДОВ BURTON скидка 20%",
      image: "https://tickettoridegroup.com/blog/wp-content/uploads/2018/09/douk-snowboards-alps-805x450.jpg",
    },
    {
      name: "Хит продаж",
      description: "Хит продаж СНОУБОРД BURTON CLASH за 14000 сом",
      image: "https://kslnewsradio.com/wp-content/uploads/2019/11/AP-Burton-620x370.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper size="large">
      <Grid className="baner" item xs={12} key={props.item.name}>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
        >
          <Typography size="large" className={classes.mediaCaption}>
            <span>{props.item.name}</span>
            <p>{props.item.description}</p>
            <Button
              className={classes.viewButton}
              variant="outlined"
              color="primary"
              onClick={() => history.replace("/auth/register")}
            >
              Подробнее
            </Button>
          </Typography>
        </CardMedia>
      </Grid>
    </Paper>
  );
}
