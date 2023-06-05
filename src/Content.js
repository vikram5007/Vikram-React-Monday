import React from "react";
import './Content.css';
import { MdDeleteSweep } from "react-icons/md";
function Content({items,handleCheck,handleDelete}) {
   
return (
    <div>
     
        <h3 id="h3"style={{display:"none" , textAlign:"center",fontSize:"25px"}}> Your List Is Empty </h3>
        <ul className="cont">
            {items.map((item)=>(

            <li className="li" key={item.id}>
                <input 
                type="checkbox"
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}
                ></input>
                <label style={ item.checked ? {textDecoration:"line-through",color:"green"}:null} 
                onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                <MdDeleteSweep
                role="button"
                onClick={()=>handleDelete(item.id)}
                tabIndex="0"/>
            </li>
            ))}
        </ul>
    </div>
)

}

export default Content;