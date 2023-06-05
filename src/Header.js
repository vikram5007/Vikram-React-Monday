import React from "react";
import './Header.css'



const header=({title})=>{
    return(
      
 <h1 id="heading">{title} </h1>
  
 
    );
};
header.defaultProps={
    title:"To Do List "
}
export default header;