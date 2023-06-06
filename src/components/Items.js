import React from "react"
import { MdDeleteSweep } from "react-icons/md";
const Items = ({items,handleCheck,handleDelete}) => {
  return (
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
  )
}

export default Items