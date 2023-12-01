import React from 'react'
import './login.css'
import cartimg from '../cartpng.jpg';
import bitslogo from '../BITS_Pilani-Logo.svg.png';

const Login = () => {
    return (
        <div>
            <div className="body">
                <div className="box">
                    <div className="title">
                        Login
                    </div>
                    <img src={cartimg} alt="cart image" />
                    <div className="btn">
                        <button> <img src = {bitslogo} alt ="logo"/>Log in with BITS mail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
