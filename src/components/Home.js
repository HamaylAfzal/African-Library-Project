import React from "react";
import top from "../Pictures/top.png";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import librarian from "../Pictures/librarian.png";
import student from "../Pictures/students.jpg"
// import {PopUp} from './PopUp'


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 50,
    marginLeft: 250,
    marginTop: 300,
    position: "relative",
    'box-shadow': " -19px 22px 38px -1px rgba(255,255,255,1)",
  },
  media: {
    height: 220,
    width: 250,
  },
});




function Home() {
  const classes = useStyles();
  return (
    <div>
      <header>
        <img src={top} className="top" alt="top" />
      </header>


      <div className= "popup">
      <div class="popupContainer">
      <input type="text" placeholder="Username" />
      <input type="pass" placeholder="Password" />
      <a href="/LMainPage" class="button"> Login</a>
      </div>
      </div>
      <script>
        document.getElementById("button").addEventListner("click", function()){
          document.querySelector("popup")
        }
      </script>




      <Grid container item xs={12} spacing={4} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={librarian}
              title="Pe"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
               Librarian
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="/LMainPage"
            >
              <Button onclick="" size="medium" variant="contained" color="secondary">
                Click Me
              </Button>
            </a>
          </CardActions>
        </Card>

        
        
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={student}
              title="pi"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
               Librarian
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="/Slibrary"
            >
              <Button onclick="" size="medium" variant="contained" color="secondary">
                Click Me
              </Button>
            </a>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Home;
