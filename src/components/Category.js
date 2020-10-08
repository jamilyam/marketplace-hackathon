import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
} from "@material-ui/core";

export default function Category() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();
  const handleChangeFilter = (query) => {
    history.replace(location.pathname + query);
  };

  return (
    <Grid className="baner" item xs={12} key={props.item.name}>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
        >
          <Typography size="large" className={classes.mediaCaption}>
            <Button
              className={classes.viewButton}
              variant="outlined"
              color="primary"
              onClick={() => handleChangeFilter("?status=true")}
              active={search.get("status") == "true"}
            >{props.item.name}</Button>
          </Typography>
        </CardMedia>
      </Grid>
  )
}
