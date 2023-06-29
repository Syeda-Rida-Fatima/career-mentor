import React, { useState } from 'react';
import axios from 'axios';
import Link from "../Links";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                token: 'b9feea09b6aefbbd26e817dad7c9279673c1460712452074ce1b72ee897cf770',
                username: 'alam',
                password: 'qwerty'
            });

            // Handle success response
            console.log(response.data);

            // Reset form fields
            setEmail('');
            setPassword('');
        } catch (error) {
            // Handle error response
            console.error(error);
        }


        // console.log(await axios.get('http://127.0.0.1:8000/api/login/'))
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            E-mail address
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
                        <Link key="CREATE-ACC" to="/CreateAccount" className="font-bold">
                            CREATE ACCOUNT
                        </Link>
                    </p>
                    <p className="text-gray-700 mb-8">
                        By clicking, you may agree to our{' '}
                        <a href="/terms-conditions" className="text-blue-500 font-bold">
                            Terms &amp; Conditions
                        </a>
                    </p>

                    <button
                        type="submit"
                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;






// import React from 'react';
// import Link from '../Links';
// const Login = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white shadow-lg rounded-lg p-8">
//                 <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//                         E-mail address
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
//                     />
//                 </div>
//                 <p className="text-blue-500 mb-4">
//                     Want to create an account?{' '}
//                     <Link
//                         key="CREATE-ACC"
//                         to="/CreateAccount"
//                         className="font-bold"
//                     >
//                         CREATE ACCOUNT
//                     </Link>
//                 </p>
//                 <p className="text-gray-700 mb-8">
//                     By clicking, you may agree to our{' '}
//                     <a href="/terms-conditions" className="text-blue-500  font-bold">
//                         Terms &amp; Conditions
//                     </a>
//                 </p>

//                 <Link
//                     key="LOGIN"
//                     to="/"
//                     className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
//                 >
//                     LOGIN
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Login;
