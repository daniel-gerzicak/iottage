import React, {Component} from "react";
import "react-dom";

function Test(){
    return(
        <div>
            <h1>Oh hello there</h1>
        </div>

    );
}

ReactDom.render(<Test />, document.getElementById('test'));

