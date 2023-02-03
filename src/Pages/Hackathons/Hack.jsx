import React, { useState } from "react"
import { useEffect } from "react"
import global from 'global'
import { Link } from "react-router-dom"
import axios from "axios"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

const images = [
    'https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    'https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://c4.wallpaperflare.com/wallpaper/364/854/488/digital-art-photoshop-concept-art-futuristic-wallpaper-preview.jpg'
]

// const competitions = [
//     { id: 1, name: 'Webathon', img: 'https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' },
//     { id: 2, name: 'SWOX S3', img: 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' },
//     { id: 3, name: 'Bit N Build', img: 'https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
//     { id: 4, name: 'Crysis', img: 'https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }
// ];

const Hack = () => {

    const navigate = useNavigate ();

    const randomImage = () => {
        return images[Math.floor(Math.random() * images.length)];
    };
    function getMarginLeft(counter) {
        return `${counter * 45}rem`;
    }


    const [competitions, setCompetitions] = useState([]);
    // const [teams, setTeams] = useState([]);

    global.batchID = "YO";

    const handleClick = (teams) => {
        // setValue ("yoooo");
        // global.batchID = "Webathon";
        // global.id = "84684b99-e89b-43db-b0c0-180de89adf4a"
        // window.alert("Hackathon is : " + global.batchID)
        // setTeams (competitions.teams)
        // console.log (teams);
        navigate("/choose", { state: { teams } });
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

    }, []);

    useEffect(() => {

        const fetchCompetitions = async (e) => {
            const response = await fetch(`https://django-instance-627.azurewebsites.net/api/list_competitions_service/`)
                .then(res => res.json())
            console.log(response.data)
            setCompetitions(response.data)
            console.log([competitions])
        };

        fetchCompetitions();
    }, []);




    return (
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">

            {/* <img class="image" src="https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" draggable="false" />
            <p className="six_seven">Webathon</p>
            <Link to="/choose"><button className="sixbutton" type="submit" name="submit" onClick={handleClick}>SELECT</button></Link>

            <img class="image" src="https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" draggable="false" />
            <p className="six_seven">Webathon</p>
            <Link to="/choose"><button className="sixbutton" type="submit" name="submit" onClick={handleClick}>SELECT</button></Link>

            <img class="image" src="https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" draggable="false" />
            <p className="six_seven">Webathon</p>
            <Link to="/choose"><button className="sixbutton" type="submit" name="submit" onClick={handleClick}>SELECT</button></Link> */}

            {competitions.map((event, index) => (
                <div>
                    <img class="image" src={randomImage()} draggable="false" />
                    <p style={{ marginLeft: getMarginLeft(index) }} className="six_seven">{event.name}</p>
                    <p style={{ marginLeft: getMarginLeft(index), bottom: '8rem'}}  className="six_seven">Venue : {event.venue}</p>
                    <Link to="/choose"><button style={{ marginLeft: getMarginLeft(index) }} id={event.id} className="sixbutton" type="submit" name="submit" onClick={handleClick}>SELECT</button></Link>
                </div>
            ))}
        </div>
    )
}

export default Hack;
