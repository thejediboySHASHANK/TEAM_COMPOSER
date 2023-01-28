import React from "react";
import Vid from "./lol.mp4"

function Appreciation() {
    return (
        <div>
            <div className="banner">
                <video autoPlay muted loop>
                    <source src={Vid} type="video/mp4"></source>
                </video>

                {/* <p className="appr">WE LOVE SOFTWARE AND THE PEOPLE WHO BUILD THEM!</p> */}
                <div className="row">
                    <div className="col-lg-6 md-6 sm-12">
                        <div class="canvas container-fluid">
                            <p className="appr">We love <span style={{color : "#81A2EF"}}>software</span> and the <span style={{color : "#FFEA20"}}>people</span> who build them!</p>
                        </div>

                    </div>

                    <div className="col-lg-6 md-6 sm-12">
                        <div class="canvas2 container-fluid ms">
                            <p className="appr"><span style={{color : "#81A2EF"}}>Connecting</span> <span style={{color : "#EEB27B"}}>innovators</span> together, to build the next <span style={{color : "#EEB27B"}}>innovation.</span></p>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Appreciation