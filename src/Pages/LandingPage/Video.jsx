import React from "react";
import Vid from "./video.mp4"
import { useEffect } from "react";
import { useRef } from "react";

function Video () {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    return (
        <div>
        <video ref={videoRef} id="videoBG" poster="poster.jpg" autoPlay muted loop>
            <source src={Vid} type="video/mp4"></source>
        </video>
        <hr></hr>
        {/* <div class='blur soft'></div> */}
        {/* <div class='blur2 soft'></div> */}

        </div>
    )
}

export default Video;