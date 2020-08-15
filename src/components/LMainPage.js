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
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import portal from "../Pictures/portal.jpg"
import Request from "../Pictures/Request.jpg"
import lenf from "../Pictures/lenf.jpg"
import directory from "../Pictures/directory.jpg"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    minWidth: 300,
    minHeight: 250,
    margin: 50,
    marginLeft: 250,
    marginTop: 300,
    position: "relative",
  },
  media: {
    height: 220,
    width: 250,
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function LMainPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div>
      <header>
        <img src={top} className="top" alt="top" />
      </header>
      <Grid container item xs={10} spacing={1} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia className={classes.media} image={portal} title="Portal" />
            <CardContent style={{ backgroundColor: "blue" }}>
              <Typography gutterBottom variant="h4" component="h2">
                Portal
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center", paddingTop: "3rem" }}>
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
          <CardMedia className={classes.media} image={directory} title="Library Directory" />
            <CardContent style={{ backgroundColor: "green" }}>
              <Typography gutterBottom variant="h4" component="h1">
                Library Directory
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center", paddingTop: "3rem" }}>
            <a href="/Llibrary">
              <Button
                className="standardButton"
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
          <CardMedia className={classes.media} image={lenf} title="Lend A Book" />
            <CardContent style={{ backgroundColor: "yellow" }}>
              <Typography gutterBottom variant="h4" component="h2">
                Lend A Book
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center", paddingTop: "3rem" }}>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                onClick={handleOpen}
                
              >
                Click Me
              </Button>
            
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
          <CardMedia className={classes.media} image={Request} title="Request A Book" />
            <CardContent style={{ backgroundColor: "red" }}>
              <Typography gutterBottom variant="h4" component="h2">
                Request A Book
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center", paddingTop: "3rem" }}>
            
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                onClick={handleOpen1}
              >
                Click Me
              </Button>
          </CardActions>
        </Card>
      </Grid>

      <div>
        <Modal
          id="modal12"
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="spring-modal-title">Book Lend Form</h2>
              <p id="spring-modal-description">
                <label>
                  {" "}
                  Student Name: <input type="text" placeholder="Name" />
                </label>
                <label>
                  {" "}
                  Date of Issue: <input type="text" placeholder="mm/dd/yyyy" />
                </label>
                <label>
                  {" "}
                  Date of Return: <input type="text" placeholder="mm/dd/yyyy" />
                </label>
                <label>
                  {" "}
                  Name of Book: <input type="text" placeholder="Name of Book" />
                </label>
                <label>
                  {" "}
                  Author <input type="text" placeholder="Author" />
                </label>

                <a href="/LMainPage">
                  <Button
                    onclick=""
                    size="medium"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </a>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>

      <div>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open1}
          onClose1={handleClose1}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open1}>
            <div className={classes.paper}>
              <h2 id="spring-modal-title">Book Request Form</h2>
              <p id="spring-modal-description">
                <label>
                  {" "}
                  Date of Request: <input type="text" placeholder="mm/dd/yyyy" />
                </label>
                <label>
                  {" "}
                  Name of Book: <input type="text" placeholder="Name of Book" />
                </label>
                <label>
                  {" "}
                  Name of Author <input type="text" placeholder="Author" />
                </label>

                <a href="/LMainPage">
                  <Button
                    onclick=""
                    size="medium"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </a>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default LMainPage;
