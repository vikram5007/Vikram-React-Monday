import React, { useState } from 'react';
import img1 from './images/1212007.jpg';
import img2 from './images/1316514.jpeg';
import img3 from './images/1316633.jpeg';
import '../styles/Image.css'

var img_Arr = [img1, img2, img3];

const Imager = () => {
  const [val, setVal] = useState(0);

  const changer = () => {
    const index_val = Math.floor(Math.random() * 3);
    console.log(index_val);
    setVal(index_val)

  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button className="btnstyle" id="change" onClick={changer} > CHANGE </button>
      </div>
      <div className='holder'>
        <img className="img" src={img_Arr[val]} height="800px" width="90%" alt="Error" 
        />
      </div>
    </div>
  );
};

export default Imager;
