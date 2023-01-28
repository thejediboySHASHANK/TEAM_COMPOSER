import React from "react";
import Image from "./sign.jpg"

function Signup () {
    return (
        <div>
         <div className="divsign">
            <form className="form" method="POST" action="https://django-instance-627.azurewebsites.net/create_user_service">
                <p className="login">SIGNUP</p>
                <div class="form-group">
                    <label  className="label" for="exampleInputEmail1">User's name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputEmail1">Create Password</label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <br></br><br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br></br><br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputPassword1">Your Email Id : </label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="bn btn btn-primary">Signup</button>
            </form>

            <img className="log" src={Image} />



        </div>

        </div>
    )
}

export default Signup