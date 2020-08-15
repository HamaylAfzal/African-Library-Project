import React from 'react'
import './Books.css'

const SearchArea = (props) => {
    return(
        <div className="search-area">
          <form onSubmit={props.searchBook}>
            <input onChange={props.handleSearch} type="text" />
            <button type="submit">Search</button>
            <select defaultValue="Sort">
              <option value="Primary" >Primary</option>
              <option value="Secondary" >Secondary</option>
              <option value="Advanced" >Advanced</option>
            </select>
          </form>
        </div>
    )
}
export default SearchArea 