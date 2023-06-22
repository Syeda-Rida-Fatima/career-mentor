import React from 'react';
import Logo from '../../images/logo.png';
import Links from '../Links';
function Navbar() {
    const centerLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/Navbar/TwoColumnSection' },
        { label: 'Blogs', path: '/Navbar/BlogSection' },
        { label: 'Contact Us', path: '/Navbar/LastSection' },
        // { label: 'profile', path: '/Profile' }
    ];
    const RightLinks = [
        { label: 'Login', path: '/Login' },
        { label: 'Create Account', path: '/CreateAccount' },
    ]

    const renderedCenterLinks = centerLinks.map((centerlink) => {
        return (<Links


            key={centerlink.label}
            to={centerlink.path}

            className="text-center text-purple-500 hover:text-pink-500 mx-2"
        >
            {centerlink.label}

        </Links>)
    });


    const renderedRightLinks = RightLinks.map((RightLink) => {
        return (<Links


            key={RightLink.label}
            to={RightLink.path}

            className="text-right text-purple-500 hover:text-pink-500 mx-2"
        >
            {RightLink.label}

        </Links>)
    });

    return (
        <nav className="bg-white py-4 px-8 flex justify-between items-center fixed top-0 w-full z-10">
            <div className="flex items-center">
                <div className="text-purple-500 text-xl font-bold">THE CAREER MENTOR</div>
                <img
                    src={Logo}// Replace with your logo image source
                    alt="Logo"
                    className="ml-2 h-8"
                />
            </div>
            <div>
                {renderedCenterLinks}
            </div>
            <div>
                {renderedRightLinks}
            </div>
        </nav>
    );
};

export default Navbar;
