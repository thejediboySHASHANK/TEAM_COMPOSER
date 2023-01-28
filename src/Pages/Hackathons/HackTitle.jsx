import React from "react";
import { Link } from "react-router-dom";

function HackTitle() {
    return (

        <div>
            <p className="batchTitle">

                HACKATHONS :  <u>TO REVEAL YOUR INNER CREATIVITY !</u>

            </p>
            <p className="info">
                HOLD LEFT MOUSE BUTTON AND DRAG LEFT/RIGHT TO SCROLL AROUND
            </p>
            <p className="registerhack">
                Can't see a specific Hackathon you are looking for? <Link to="/RegisterHackathon">Register Here.</Link>

            </p>

        </div>


    )
}
export default HackTitle;