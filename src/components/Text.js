import React from 'react';
import { useState } from 'react';
import './Text.css';



var words = ['Arigato Gozaimasu', 'Konichi Wa', 'Gomennasai'];
var mean = ['Thank You So Much', "Hello There ! ", "I'm Sorry "]

function Worder() {
    const [value, setvalue] = useState(0);
    function word_manipulator() {
        var indexer = Math.floor(Math.random() * 3);
        setvalue(indexer);
    }

    return (

        <div id="houser">
            <h1 className="heading"> Here Are Random Japanese Words  </h1>
            <h3 id="h3words" onClick={word_manipulator}>{words[value]}<p id="meaning">       ( {mean[value]}) </p></h3>
        </div>
    )
}

export default Worder
