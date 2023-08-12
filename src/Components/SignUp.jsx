import React from 'react';
import {  useState } from "react";
import axios from "axios";
import "../Styles/Signup.css"

function SignUp() {
    const [details, setDetails] = useState({});

    // useEffect(() => {
    //   handleSignup();
    // }, []);

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("line8", details);
        axios.post("https://reqres.in/api/register", details)
            .then((res) => {
                console.log(res);
                console.log(res.request.response["token"]);
                if (res.request.status === 200) {
                    alert("✅ Successfully Register !");
                }
            })
            .catch((err) => {
            alert("❌ Please Enter Correct Details")
            
                console.log(err);
            });
        console.log(details);

    };

    const hanldeInput = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    return (
        <div className='signup_container'>
            <form>
              
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    onChange={(e) => { hanldeInput(e) }}
                />
                <input
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={(e) => { hanldeInput(e) }}
                />
                <button className='btn2' onClick={handleSignup}>SignUp</button>
            </form>
        </div>
    );
}

export default SignUp;
