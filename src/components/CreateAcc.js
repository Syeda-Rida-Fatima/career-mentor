import React from 'react';
import { a } from 'react-router-dom';
import Links from './Links';
const CreateAccount = () => {
    const countries = ['Country 1', 'Country 2', 'Country 3']; // Replace with your own country options
    const cities = ['City 1', 'City 2', 'City 3']; // Replace with your own city options

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        E-mail Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
                        Country
                    </label>
                    <select
                        id="country"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Please select your country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                        City
                    </label>
                    <select
                        id="city"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Please select your city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        minLength={6}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <Links
                    key="CREATE-ACC"
                    to="/"
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                >
                    CREATE ACCOUNT
                </Links>
                <p className="text-blue-500 mt-4">
                    Already have an account?{' '}
                    <Links
                        key="LOGIN"
                        to="/Login"
                        className="font-bold"
                    >
                        LOGIN
                    </Links>
                </p>
            </div>
        </div>
    );
};

export default CreateAccount;

