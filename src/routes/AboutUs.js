import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FeaturedPost from "../components/Blog";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  blogging:{
    marginTop: "20px",
  }
}));


const featuredPosts = [
  {
    title: "Интересные факты о сноубординге",
    date: "16.10.2020",
    description:
      "Однажды в Америке, добрый папа, спасая свою дочь от скучного катания на горных лыжах, слепил ей две лыжи вместе, привязал к ним веревочку и сказал, что это – снерфер (прародитель сноуборда). Дочке очень понравилось, ее друзьям – тоже. В 1965 году Шерман Поппен (именно так звали папу) получил патент на изобретение и передал право на производство доски спортивной фирме",
    image:
      "https://static-ru.insales.ru/images/products/1/516/84402692/large_s2-2.jpg",
    imageText: "facts",
  },
  {
    title: "Школа сноуборда",
    date: "13.10.2020",
    description:
      "Когда сноубордист падает, единственная его защита – это руки. Причём у профессионалов чаще всего возникают травмы рук и плечей, а у новичков основной удар приходится на запястья. Травматологи призывают тех, кто собрался учиться кататься на сноуборде, не только приобрести шлем и защиту для запястий, но и, прежде всего, научиться падать.",
    image:
      "https://static-ru.insales.ru/images/products/1/516/84402692/large_s2-2.jpg",
    imageText: "fact",
  },
];

export default function AboutUs() {
  const classes = useStyles();

  const Main = () => (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Доставка
      </Typography>
      <Divider />
      <Typography className={classes.markdown}>
        Наш интернет-магазин осуществляет доставку по Москве и регионам России:
        Курьерская доставка по Москве — 200 руб. Почтовая доставка по России —
        от 150 руб. в зависимости от адреса доставки.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Контакты
      </Typography>
      <Typography>
        Телефон: +7 (999) 999-99-99 email: your.shop@your-company.ru
      </Typography>
    </Grid>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.blogging}>
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="О нас" />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

