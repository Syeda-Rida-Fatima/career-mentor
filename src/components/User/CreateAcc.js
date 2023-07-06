import React, { useState } from 'react';
import axios from 'axios';
import Link from '../Links';

const CreateAccount = () => {
    const countries = ["Afghanistan", "Albania", "Algeria", /* ... */ "Zambia", "Zimbabwe"];
    const cities = ["Abidjan", "Abu Dhabi", "Abuja", /* ... */ "Yaoundé", "Yerevan", "Zagreb", "Zürich"];

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username,
                email,
                country,
                city,
                password,
            });

            // Handle success response
            console.log(response.data);

            // Reset form fields
            setName('');
            setEmail('');
            setCountry('');
            setCity('');
            setPassword('');
        } catch (error) {
            // Handle error response
            console.error(error);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
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
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
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
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
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
                    <Link key="Create-Acc" to="/" className="font-bold">
                        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                            CREATE ACCOUNT
                        </button>
                    </Link>

                    <p className="text-blue-500 mt-4">
                        Already have an account?{' '}
                        <Link key="LOGIN" to="/Login" className="font-bold">
                            LOGIN
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
