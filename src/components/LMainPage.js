import React from "react";
import top from "../Pictures/top.png";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight:250,
    margin: 50,
    marginLeft: 250,
    marginTop: 300,
    position: "relative",
  },
  media: {
    height: 220,
    width: 250,
  },
});

function LMainPage() {
  const classes = useStyles();
  return (
    <div>
      <header>
        <img src={top} className="top" alt="top" />
      </header>

      <Grid container item xs={10} spacing={1} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Library Directory
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="/LMainPage">
              <Button className="standardButton"
                onclick=""
                size="medium"
                variant="contained"
                color="secondary"
              >
                Click Me
              </Button>
            </a>
          </CardActions>
        </Card>


        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Lend A Book
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="/LMainPage">
              <Button
                onclick=""
                size="medium"
                variant="contained"
                color="secondary"
              >
                Click Me
              </Button>
            </a>
          </CardActions>
        </Card>


        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Request A Book
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="/LMainPage">
              <Button
                onclick=""
                size="medium"
                variant="contained"
                color="secondary"
              >
                Click Me
              </Button>
            </a>
          </CardActions>
        </Card>

      </Grid>
    </div>
  );
}

export default LMainPage;
