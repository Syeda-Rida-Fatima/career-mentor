import React, { useState } from 'react';
import axios from 'axios';
import Link from '../Links';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateAccount = () => {
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "AntiguaAndBarbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaAndHerzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "BurkinaFaso", "Burundi", "CaboVerde", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepublic", "Denmark", "Djibouti", "Dominica", "DominicanRepublic", "EastTimor", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "KoreaNorth", "KoreaSouth", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "MarshallIslands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthMacedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "SaintKittsAndNevis", "SaintLucia", "SaintVincentAndTheGrenadines", "Samoa", "SanMarino", "SaoTomeAndPrincipe", "SaudiArabia", "Senegal", "Serbia", "Seychelles", "SierraLeone", "Singapore", "Slovakia", "Slovenia", "SolomonIslands", "Somalia", "SouthAfrica", "SouthSudan", "Spain", "SriLanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "TrinidadAndTobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedKingdom", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "VaticanCity", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    const cities = ["Abidjan", "Abu Dhabi", "Abuja", "karachi", "Yaoundé", "Yerevan", "Zagreb", "Zürich"];

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                username: username,
                email: email,
                password: password,
                country: country,
                city: city,
            });

            // Handle success response
            console.log(response.data);

            toast.success("Sucessfully Signup")
            // Reset form fields

            setAccountCreated(true);
        } catch (error) {
            // Handle error response
            console.error(error);
            toast.error("Signup failed. Please check your credentials")
            setAccountCreated(false)
        }
        setName('');
        setEmail('');
        setCountry('');
        setCity('');
        setPassword('');
    };
    return (
        <div className="flex  items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 mt-10">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <div >
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div className="mb-4 flex-row ">
                        <label htmlFor="password" className="flex block text-gray-700 font-bold mb-2">
                            Password


                            <button
                                className="flex inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >

                                {!isPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button></label>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={6}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"

                        />
                    </div>
                    <Link
                        key="Create-Acc"
                        to={accountCreated ? "/" : "/CreateAccount"}
                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                        <button type="submit"
                            onClick={handleSubmit}>
                            CREATE ACCOUNT
                        </button>
                    </Link>

                    <p className="text-blue-500 mt-4">
                        Already have an account?{' '}
                        <Link key="LOGIN" to="/Login" className="font-bold">
                            LOGIN
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateAccount;
