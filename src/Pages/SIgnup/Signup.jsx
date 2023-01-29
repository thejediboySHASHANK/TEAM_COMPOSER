import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "./sign.jpg"
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [data, setFormData] = useState({
        "name": "",
        "password": "",
        "email": ""
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
            await axios.post('https://django-instance-627.azurewebsites.net/api/create_user_service/', {


                "name": data.name,
                "csrfmiddlewaretoken": posts.csrf_token,
                "password": data.password,
                "mail": data.email


            }, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            )
                .then(res => {
                    console.log(res)
                    navigate('/login')
                })
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <div className="divsign">
                <form className="form">
                    {loading ? (
                        <h4 style={{ color: 'white' }}>Loading...</h4>
                    ) : (
                        <>
                            <input value={posts} type="hidden" name="csrfmiddlewaretoken" />
                            <p className="login">SIGNUP</p>
                            <div class="form-group">
                                <label className="label" for="name">User's name</label>
                                <input onChange={handleChange} type="text" class="form-control" id="name" name="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Create an Awesome username" />
                                <small id="nameHelp" class="form-text text-muted">
                                    This will be your unique identification!
                                </small>
                            </div>
                            <br></br>
                            <div class="form-group">
                                <label className="label" for="password">Create Password</label>
                                <input onChange={handleChange} type="password" class="form-control" id="password" name="password"
                                    aria-describedby="emailHelp" placeholder="Create a strong password" />
                            </div>
                            <br></br><br></br>
                            <div class="form-group">
                                <label className="label" for="confirm_password">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm_password"
                                    placeholder="Password" />
                            </div>
                            <br></br><br></br>
                            <div class="form-group">
                                <label className="label" for="email">Your Email Id : </label>
                                <input onChange={handleChange} type="email" class="form-control" id="email" name="email"
                                    placeholder="Enter your email" />
                            </div>
                            {/* <input type="hidden" name="csrfmiddlewaretoken" value={posts.csrf_token}/> */}
                            <button onClick={handleSubmit} type="submit" class="bn btn btn-primary">Signup</button>

                        </>
                    )}
                </form>
                <img className="log" src={Image} />
            </div>
        </div>
    )
}

export default Signup


















// import React, {useState, useEffect} from "react";
// import Image from "./sign.jpg"

// function Signup() {

//     const [loading, setLoading] = useState(false);
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const loadPost = async () => {
//             setLoading(true);
//             const response = await fetch(`https://django-instance-627.azurewebsites.net/csrf_token/`)
//                 .then(res => res.json())
//             setPosts(response);
//             setLoading(false);
//         }
//         loadPost();
//     }, []);

//     const action = `https://django-instance-627.azurewebsites.net/api/create_user_service/`

//     return (
//         <div>
//             <div className="divsign">
//                 <form className="form" method="POST"
//                       action={action}>
//                     {loading ? (
//                         <h4>Loading...</h4>
//                     ) : (
//                         <>
//                             <p className="login">SIGNUP</p>
//                             <div class="form-group">
//                                 <label className="label" for="name">User's name</label>
//                                 <input type="text" class="form-control" id="name" name="name"
//                                        aria-describedby="emailHelp"
//                                        placeholder="Create an Awesome username"/>
//                                 <small id="nameHelp" class="form-text text-muted">
//                                     This will be your unique identification!
//                                 </small>
//                             </div>
//                             <br></br>
//                             <div class="form-group">
//                                 <label className="label" for="password">Create Password</label>
//                                 <input type="password" class="form-control" id="password" name="password"
//                                        aria-describedby="emailHelp" placeholder="Create a strong password"/>
//                             </div>
//                             <br></br><br></br>
//                             <div class="form-group">
//                                 <label className="label" for="confirm_password">Confirm Password</label>
//                                 <input type="password" class="form-control" id="confirm_password"
//                                        placeholder="Password"/>
//                             </div>
//                             <br></br><br></br>
//                             <div class="form-group">
//                                 <label className="label" for="email">Your Email Id : </label>
//                                 <input type="email" class="form-control" id="email" name="mail"
//                                        placeholder="Enter your email"/>
//                             </div>
//                             <input type="hidden" name="csrfmiddlewaretoken" value={posts.csrf_token}/>
//                             <button type="submit" class="bn btn btn-primary">Signup</button>
//                         </>
//                     )}
//                 </form>
//                 <img className="log" src={Image}/>
//             </div>
//         </div>
//     )
// }

// export default Signup