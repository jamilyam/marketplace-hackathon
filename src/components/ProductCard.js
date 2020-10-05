import React from "react";
import {
  CardHeader,
  Card,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
} from "@material-ui/core";
import {
  MoreVert as MoreVertIcon,
  Share,
  ShoppingCart,
} from "@material-ui/icons";
import emptyImage from "../assets/empty-image.png";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain",
    position: "relative",
  },
  mediaImage: {
    position: "absolute",
    height: "100%",
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  oldPrice: {
    textDecoration: "line-through",
  },
  card: {
    margin: "10px",
  },
  saleIndicator: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  CardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ProductCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>{data.author[0] || "?"}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.author}
        onError={(e) => {
          console.log("error");
          e.target.src = emptyImage;
        }}
      />
      <CardMedia className={classes.media}>
        <img
          className={classes.mediaImage}
          src={data.image || emptyImage}
          onError={(e) => {
            e.target.src = emptyImage;
          }}
          alt={data.title}
        />
        {data.discountInPercent != null && (
          <Button
            size="medium"
            className={classes.saleIndicator}
            color="secondary"
            variant="contained"
          >
            -{data.discountInPercent}
          </Button>
        )}
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions} disableSpacing>
        <div>
          <IconButton aria-label="add to card">
            <ShoppingCart />
          </IconButton>
        </div>
        <div>
          {data.salePrice != null && (
            <Button className={classes.oldPrice} color="secondary">
              {data.price}{" "}
            </Button>
          )}

          <Button size="medium" variant="contained" color="primary">
            {data.salePrice ?? data.price}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}