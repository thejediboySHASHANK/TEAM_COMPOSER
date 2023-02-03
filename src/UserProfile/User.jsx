import React, { useEffect, useState } from "react";
import Image from "./meow.avif"

function User () {

    const [posts, setPosts] = useState ([])

    useEffect (() => {
        const loadPost = async () => {
            // setLoading(true);
            const response = await fetch(`https://django-instance-627.azurewebsites.net/api/list_team_details_service/`)
                .then(res => res.json())
            // setPosts(response);  
            console.log (response)
            // setLoading(false);
        }
        loadPost();
    }, []);


    return (
        <div className="row">
            <div className="col-lg-3 md-3 sm-12" style={{backgroundColor : "black", display : "grid", height : "97vh", borderRadius:"25px", margin : "1rem 0 0 0rem"}}>
                <img className="meow" src={Image} draggable="false"/>
                <p className="useremail">Hi, </p>
                <p className="useremail val"><u>Shawshank</u></p>
                <p className="useremail">Email : </p>
                <p className="useremail val">21052358@kiit.ac.in</p>
                
                {/* <h1>HELLO WORLD!</h1> */}
            </div>
            <div className="col-lg-9 md-9 sm-12">
                <div className="fluid-container teams"> 
                <p className="useremail">Your Teams : </p>  
                {/* <iframe src="https://django-instance-627.azurewebsites.net/api/list_team_details_dev_ui/"/> */}

                </div>

                <div className="fluid-container teams"> 
                <p className="useremail">Requested Teams : </p>  

                </div>

                <div className="fluid-container teams"> 
                <p className="useremail">Pending Requests : </p>  

                </div>
            </div>


        </div>
    )
}

export default User