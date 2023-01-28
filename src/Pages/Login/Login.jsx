import React from "react";
import Image from "./log4.jpg"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <form className="form">
                <p className="login">LOGIN</p>
                <div class="form-group">
                    <label className="label" for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br></br>
                <div class="form-group">
                    <label className="label" for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="bn btn btn-primary">Login</button>
                <br></br><br></br>
                <Link to="/signup"><small id="emailHelp" class="form-text text-muted notreg">Not registered yet? Click here.</small></Link>

            </form>

            <img className="log" src={Image} />



        </div>
    )
}

export default Login