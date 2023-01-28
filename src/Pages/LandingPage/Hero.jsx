import React from "react";
import { Link } from "react-router-dom"


function Hero() {
    return (
        <div className="row">
            <div className="col-lg-6 md-6 sm-12">
                <p className="mainContent">
                    BUILD AWESOME THINGS
                </p>
                {/* <MainImage /> */}
                <p className="mainContent2">
                    Create/Select your Teams
                </p>

            </div>
            <div className="col-lg-6 md-6 sm-12">
                <div class="card text-right ms-auto hacker" style={{width: '50%'}}>
                    <div class="card-body">
                        <p class="card-text">"What is now proved was once only imagined."</p>
                        <Link to="/hackathons"><a href="#" class="btn btn-primary hack">Explore Hackathons</a></Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Hero