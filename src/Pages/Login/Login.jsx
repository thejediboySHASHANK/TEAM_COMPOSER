import React, {useState, useEffect} from "react";
import Image from "./log4.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Login() {
    const navigate = useNavigate ();

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [data, setFormData] = useState({
        "name": "",
        "password": ""
    })

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await fetch(`https://django-instance-627.azurewebsites.net/csrf_token/`)
                .then(res => res.json())
            setPosts(response);
            setLoading(false);
        }
        loadPost();
    }, []);

    const handleChange = async (event) => {
        const newForm = { ...data }
        newForm[event.target.name] = event.target.value
        setFormData(newForm);
        console.log(setFormData)
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://django-instance-627.azurewebsites.net/api/user_login_service/', {
                "name": data.name,
                "csrfmiddlewaretoken": posts.csrf_token,
                "password": data.password
            }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            )
                .then(res => {
                    console.log(res)
                    // navigate('/login')

                    if (res.data.status === "success") {
                        // window.alert ('User Created Successfully!');
                        swal({
                            title: "Log in Successful!",
                            text: "You will be redirected to the Hackathons page",
                            icon: "success",
                            button: "Go there",
                        });
                        navigate ('/hackathons')
                    }
                    else {
                        // window.alert ('User Creation Failed');
                            swal({
                                title: "Log In Failed!",
                                text: res.data.reason,
                                icon: "error",
                                button: "Ok",
                            });
                    }
                })
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <form className="form">

            {loading ? (
                        <h4 style={{ color: 'white' }}>Loading...</h4>
                    ) : (
                        <>
                            <input value={posts} type="hidden" name="csrfmiddlewaretoken" />
                            <p className="login">LOGIN</p>
                            <div class="form-group">
                                <label className="label" for="name">User's name</label>
                                <input onChange={handleChange} type="text" class="form-control" id="name" name="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Your Awesome Username" />
                                <small id="nameHelp" class="form-text text-muted">
                                    This will be your unique identification!
                                </small>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label className="label" for="password">Password</label>
                                <input onChange={handleChange} type="password" class="form-control" id="password" name="password"
                                    aria-describedby="emailHelp" placeholder="Enter Your Password" />
                            </div>
                            {/* <input type="hidden" name="csrfmiddlewaretoken" value={posts.csrf_token}/> */}
                            <button onClick={handleSubmit} type="submit" class="bn btn btn-primary">Login</button>
                            <br></br><br></br>
                            <Link to="/signup"><small id="emailHelp" class="form-text text-muted notreg">Not registered yet? Click here.</small></Link>

                        </>
                    )}





                {/* <input value={posts} type="hidden" name="csrfmiddlewaretoken" />
                <p className="login">LOGIN</p>
                <div class="form-group">
                    <label className="label" for="name">UserName : </label>
                    <input onChange={handleChange} type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br></br>
                <div class="form-group">
                    <label className="label" for="password">Password</label>
                    <input onChange={handleChange} type="password" class="form-control" id="password" placeholder="Password" />
                </div>
                <button onClick={handleSubmit} type="submit" class="bn btn btn-primary">Login</button>
                <br></br><br></br>
                <Link to="/signup"><small id="emailHelp" class="form-text text-muted notreg">Not registered yet? Click here.</small></Link> */}

            </form>

            <img className="log" src={Image} />
        </div>
    )
}

export default Login