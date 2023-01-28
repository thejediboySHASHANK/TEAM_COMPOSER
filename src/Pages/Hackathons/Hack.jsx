import React, { useState } from "react"
import { useEffect } from "react"
import global from 'global'
import { Link } from "react-router-dom"

const Hack = () => {

    // const [value, setValue] = useState ("");

    global.batchID = "YO";

    const handleClick = () => {
        // setValue ("yoooo");
        global.batchID = "Webathon";
        global.id = "84684b99-e89b-43db-b0c0-180de89adf4a"
        window.alert("Hackathon is : " + global.batchID)
    }
    const handleClick2 = () => {
        // setValue ("yoooo2");
        global.batchID = "SWOX S3";
        window.alert("Hackathon is : " + global.batchID)
        global.id = "8ca2043d-b4c1-459b-91a5-708f0617b87e"
    }
    const handleClick3 = () => {
        // setValue ("yoooo3");
        global.batchID = "Bit N Build";
        window.alert("Hackathon is : " + global.batchID)
        global.id = "da353f60-4b19-4ae9-ac28-4d60796f1e37"
    }
    const handleClick4 = () => {
        // setValue ("yoooo4");
        global.batchID = "Crysis";
        window.alert("Hackathon is : " + global.batchID)
        global.id = "2b3c3843-225a-450d-b4a5-c7374851b2ad"
    }

    useEffect(() => {
        const track = document.getElementById("image-track");

        const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        const handleOnMove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of track.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }
        // Add your event listeners here, using the same code as above
        window.onmousedown = e => handleOnDown(e);
        window.ontouchstart = e => handleOnDown(e.touches[0]);
        window.onmouseup = e => handleOnUp(e);
        window.ontouchend = e => handleOnUp(e.touches[0]);
        window.onmousemove = e => handleOnMove(e);
        window.ontouchmove = e => handleOnMove(e.touches[0]);
        // window.onscroll = e => handleOnMove(e.touches[0]);

        // function Batch(value) {

        //     let amount = value;
        //     console.log(amount);

        // }

    }, []);




    return (
        <div>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <img class="image" src="https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" draggable="false" />
                <p className="six_seven">Webathon</p>
                <p className="early">BUILD AWESOME WEB-APPS</p>

                <Link to="/choose"><button id="one" onClick={handleClick} className="sixbutton">SELECT</button></Link>

                <img class="image" src="https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" draggable="false" />
                <p className="seven_eight">SWOX S3</p>
                <p className="morning">CONTRIBUTE IN OPEN SOURCE</p>
                <Link to="/choose"><button id="two" onClick={handleClick2} className="sevenbutton" type="submit" name="submit">SELECT</button></Link>

                <img class="image" src="https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" draggable="false" />
                <p className="eight_nine">Bit N Build</p>
                <p className="late_morning">Blockchain Mania</p>
                <Link to="/choose"><button id="three" onClick={handleClick3} className="eightbutton" type="submit" name="submit">SELECT</button></Link>

                <img class="image" src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" draggable="false" />
                <p className="nine">Crysis</p>
                <p className="night">Build ML projects</p>
                <Link to="/choose"><button id="four" onClick={handleClick4} className="ninebutton" type="submit" name="submit">SELECT</button></Link>


                {/* <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
                <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" /> */}
            </div>
        </div>
    )
}

// console.log (handleOnMove())
export default Hack ;
