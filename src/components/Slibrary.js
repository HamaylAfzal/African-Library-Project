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

const useStyles = makeStyles({
  
  table: {
    minWidth: 800,
    backgroundColor: 'coral',
  },
  table1: {
   backgroundColor: 'red',
   padding: 30,
   fontWeight: 'bold',
   fontSize: 20,
    
  },
});

function Book(props) {
  const classes = useStyles();

  return (
    <div>
    <header className="head">WANT TO FIND SOMETHING?</header>
      
      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell className={classes.table1}>ID</TableCell>
              <TableCell className={classes.table1}  align="right">Name</TableCell>
              <TableCell className={classes.table1}  align="right">Author</TableCell>
              <TableCell className={classes.table1}  align="right">Level</TableCell>
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
    </div>
  );
}

export default Book;
