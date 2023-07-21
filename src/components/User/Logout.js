// import React from 'react';
// import { tokenValue } from './Login';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Logout = () => {
//   const handleLogout = async () => {

//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/login', {
//         method: 'POST',
//         headers: {
//           Authorization: { tokenValue },
//         },
//       });

//       if (response.ok) {
//         toast.success('Logged out successfully!');
//         localStorage.removeItem('token');
//         tokenValue = 'null'
//       } else {
//         console.error('Logout failed');
//         toast.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Error occurred during logout:', error);
//     }
//   };
//   return (
//     <div>
//       <button
//         className="fixed top-20 right-20 bg-purple-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded focus:outline-none"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Logout;