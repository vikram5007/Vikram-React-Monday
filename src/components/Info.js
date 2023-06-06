import React from "react";

var task_pending_style = {
    textAlign: "center",
    fontFamily: "Verdana",
    backgroundColor:"Black",
    color:"white",
    borderRadius:"5px",
    
}
const footer = ({ length }) => {

    return (

        <h3 style={task_pending_style}> You Have {length}{length <= 1 ? " Task" : " Tasks"} In Total  
      </h3>
    )

};
footer.defaultProps = { length: "0" };
export default footer;