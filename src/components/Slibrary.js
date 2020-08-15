import React, { Component } from "react";
import top from "../Pictures/top.png";
import SearchArea from './SearchArea';
import request from 'superagent'
import BookList from './BookList'
class Slibrary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             books: [],
             searchField: ''
        }
    }
    
    searchBook = (e) => {
      e.preventDefault();
      request
        .get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
        .query({ q: this.searchField})
        .then((data) =>{
          this.setState({ books: [...data.body.items]})
        }
        )

    }


    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})
    }


  render() {
    return (
      <div>
         <header>
          <img src={top} className="top" alt="top" />
        </header> 
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />

        <BookList books={this.state.books} />


      </div>
    );
  }
}

export default Slibrary