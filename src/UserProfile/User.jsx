import React from "react";
import Image from "./meow.avif"

function User () {
    return (
        <div className="row">
            <div className="col-lg-3 md-3 sm-12">
                <img className="meow" src={Image} />
                {/* <h1>HELLO WORLD!</h1> */}
            </div>
            <div className="col-lg-9 md-9 sm-12">
                
            </div>


        </div>
    )
}

export default User