import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BookData from "./BookData";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";



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
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 800,
    backgroundColor: "coral",
  },
  table1: {
    backgroundColor: "red",
    padding: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: 'blue',
    marginRight: 100,
    marginTop: 50,
    marginBottom: 50,
    padding:10
    
  },
  button1: {
    backgroundColor: 'red',
    marginTop: 50,
    marginBottom: 50,
    padding:10
  },
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

}));

function Book(props) {
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
      <header className="head">Library Directory</header>
      <Button onClick={handleOpen} className={classes.button} variant="contained" >
        ADD
      </Button>
      <Button className={classes.button1} variant="contained" >
        EDIT
      </Button>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.table1}>ID</TableCell>
              <TableCell className={classes.table1} align="right">
                Name
              </TableCell>
              <TableCell className={classes.table1} align="right">
                Author
              </TableCell>
              <TableCell className={classes.table1} align="right">
                Level
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {BookData.map((props) => (
              <TableRow key={props.id}>
                <TableCell component="th" scope="row">
                  {props.id}
                </TableCell>

                <TableCell align="right">{props.Name}</TableCell>
                <TableCell align="right">{props.Author}</TableCell>
                <TableCell align="right">{props.Level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>



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
              <h2 id="spring-modal-title">ADD a Book</h2>
              <p id="spring-modal-description">
                <label>
                  {" "}
                  Book Name: <input type="text" placeholder="Book Name" />
                </label>
                <label>
                  {" "}
                  Author : <input type="text" placeholder="Author" />
                </label>
                <label>
                  {" "}
                  Level : <input type="text" placeholder="Level" />
                </label>
                

                <a href="/Llibrary">
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

export default Book;
