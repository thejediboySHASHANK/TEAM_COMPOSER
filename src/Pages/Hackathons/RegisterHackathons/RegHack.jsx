import React from "react";
import { Link } from "react-router-dom";

function RegHack() {
    return (
        <div>
            
            <form className="form hackers">
                <p className="login reg">REGISTER A NEW HACKATHON</p>
                
                <div class="form-group">
                    <label className="label" for="exampleInputEmail1">Enter Hackathon Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br></br><br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputEmail1">Add Short Description of the Hackathon</label>
                    <textarea type="text" class="form-control desc" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br></br><br></br>
                <label className="label" for="exampleInputEmail1">Starts On</label>
                <input type="datetime-local" id="date" />
                <br></br><br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputPassword1">Add Venue</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br></br><br></br>
                <label className="label" for="exampleInputEmail1">Enter Member Limit</label>
                <select class="form-select num" aria-label="Default select example">
                    <option className="select" selected>Open this select menu</option>
                    <option className="select" value="1">One</option>
                    <option className="select" value="2">Two</option>
                    <option className="select" value="3">Three</option>
                    <option className="select" value="1">Four</option>
                    <option className="select" value="2">Five</option>
                    <option className="select" value="3">Six</option>
                </select>
                <button type="submit" class="bn btn btn-primary">Register</button>
                <br></br><br></br>
                {/* <Link to="/signup"><small id="emailHelp" class="form-text text-muted notreg">Not registered yet? Click here.</small></Link> */}

            </form>

        </div>
    )
}

export default RegHack