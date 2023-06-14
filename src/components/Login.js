import React from 'react';
import Links from './Links';
const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        E-mail address
                    </label>
                    <input
                        type="email"
                        id="email"
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
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <p className="text-blue-500 mb-4">
                    Want to create an account?{' '}
                    <Links
                        key="CREATE-ACC"
                        to="/CreateAccount"
                        className="font-bold"
                    >
                        CREATE ACCOUNT
                    </Links>
                </p>
                <p className="text-gray-700 mb-8">
                    By clicking, you may agree to our{' '}
                    <a href="/terms-conditions" className="text-blue-500  font-bold">
                        Terms &amp; Conditions
                    </a>
                </p>

                <Links
                    key="LOGIN"
                    to="/"
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                >
                    LOGIN
                </Links>
            </div>
        </div>
    );
};

export default Login;
