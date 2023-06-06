import React from "react";
import '../styles/Content.css';
import Items from './Items'
function Content({items,handleCheck,handleDelete}) {
   
return (
    <div>
        <h3 id="h3"style={{display:"none" , textAlign:"center",fontSize:"25px"}}> Your List Is Empty </h3>
        <Items 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
    </div>
)

}

export default Content;