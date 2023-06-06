import React from "react"
import '../styles/Search.css'
const Search = ({Search,newSearch}) => {
  return (
   <form className="searcher" onSubmit={(e)=>e.preventDefault()}>
    <input type="text"
    value={Search}
    onChange={(e)=>{newSearch(e.target.value)}}
    role="searchbox"
    placeholder="Search for your Tasks "/>
   </form>
  )
}

export default Search;