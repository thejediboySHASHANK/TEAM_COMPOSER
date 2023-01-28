import React from "react";
import Image from "./shake.jpg"
import { Link } from "react-router-dom";

function Choose() {
    return (
        <div className="row">
            <div className="col-lg-6 md-6 sm-12">
                <Link to="/teamlist"><div class="container">
                    <div class="card xyz card1">
                        <div class="border">
                            <h2>Join Teams</h2> 
                        </div>
                    </div>
                </div></Link>

            </div>

            <div className="col-lg-6 md-6 sm-12">
                <form className="form create">
                    <p className="login create_team">OR..   CREATE TEAMS</p>
                    <div class="form-group">
                        <label className="label" for="exampleInputEmail1">Team Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter team name" />
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <br></br>
                    <button type="submit" class="bn btn btn-primary">CREATE</button>
                </form>

            </div>


        </div>
    )
}

export default Choose