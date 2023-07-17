import React, { useState } from 'react';
import axios from 'axios';
import Links from "../Links";
let tokenValue = ''
const Login = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    const [loggedIn, setLoggedIn] = useState(false); // Track login state

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password,
            });
            // Handle success response
            console.log(response.data);
            const { token } = response.data;
            tokenValue = token;
            setLoggedIn(true);


            // Reset form fields
            setusername('');
            setPassword('');
        } catch (error) {
            // Handle error response
            console.error(error);
        }



    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            UserName
                        </label>
                        <input
                            type="username"
                            id="username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <p className="text-blue-500 mb-4">
                        Want to create an account?{' '}
                        <Links key="CREATE-ACC" to="/CreateAccount" className="font-bold">
                            CREATE ACCOUNT
                        </Links>
                    </p>
                    <p className="text-gray-700 mb-8">
                        By clicking, you may agree to our{' '}
                        <a href="/terms-conditions" className="text-blue-500 font-bold">
                            Terms &amp; Conditions
                        </a>
                    </p>


                    <Links
                        key="Login"
                        to={loggedIn ? "/Survey" : "/Survey"}
                        // to="/Survey"
                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                    >
                        <button
                            type="submit"
                            onClick={handleSubmit}

                        >
                            LOGIN
                        </button>
                    </Links>
                </form>
            </div>
        </div>
    );
};
export { tokenValue };
export default Login;