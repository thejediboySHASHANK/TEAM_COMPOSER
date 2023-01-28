import React from "react";
import Navbar from "../../Components/Navbar";

import Video from "./Video";
import Hero from "./Hero";

import Hack from "../Hackathons/Hack";

function Landing() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Video />
            {/* <Hack /> */}
        </div>
    )
}

export default Landing;