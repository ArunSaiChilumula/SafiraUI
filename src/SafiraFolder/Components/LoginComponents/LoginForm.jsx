import React, { useState } from 'react'
import '../../css/LoginPageStyle.css'
const LoginForm = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [name1, setName1] = useState("");
    const [password1, setPassword1] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        // alert(`Your name is: ${name}`);
    };

    return (
        <div className='LoginContainer'>
            <div className='Login'>
                <p className='loginHeading'>Login</p>
                <form onSubmit={handleSubmit} className='FormContainer'>
                    <label>Username or email * </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // update state
                    />
                    <label>Passwords *</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // update state
                    />

                    {/* <button type="submit">Submit</button> */}

                    <div className='LoginformBottom'>
                        <p className='LoginformBottom1'>Lost your password?</p>
                        <p className='loginbtnDiv'>Remember me<button className='frmbtn'>LOGIN</button></p>
                    </div>
                </form>
            </div>
            <div className='Register'>
                <p className='loginHeading'>Register</p>
                <form onSubmit={handleSubmit} className='FormContainer'>
                    <label>Email address *</label>
                    <input
                        type="text"
                        value={name1}
                        onChange={(e) => setName1(e.target.value)} // update state
                    />
                    <label>Passwords *</label>
                    <input
                        type="text"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)} // update state
                    />
                    <div className='RegisterformBottom'>
                        <button className='frmbtn'>Register</button>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default LoginForm