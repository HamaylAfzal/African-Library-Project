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
import student from "../Pictures/students.jpg";
import './modal.css'
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; 




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 300,
    margin: 50,
    marginLeft: 250,
    marginTop: 300,
    position: "relative",
    "box-shadow": " -19px 22px 38px -1px rgba(255,255,255,1)",
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

function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <header>
        <img src={top} className="top" alt="top" />
      </header>

      <Grid container item xs={12} spacing={4} justify="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={librarian} title="Pe" />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Librarian
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              data-toggle="modal"
              data-target="#modal12"
            >
              Click Me
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={student} title="pi" />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Student
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <a href="/Slibrary">
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

      <div>
        <button type="button" onClick={handleOpen}>
          
        </button>
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
              <h2 id="spring-modal-title">Login Form</h2>
              <p id="spring-modal-description">
                <input type="text" placeholder="UserName" />
                <input type="text" placeholder="Password" />
                <a href="/LMainPage">
                  <Button
                    onclick=""
                    size="medium"
                    variant="contained"
                    color="secondary"
                  >
                    Log In
                  </Button>
                </a>
                <Button color="secondary" onClick={handleClose}>
                  SignUp
                </Button>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
