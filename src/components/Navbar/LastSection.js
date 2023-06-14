import React from 'react';

function LastSection(props) {

    return (
        <section className="bg-gray-900 text-white py-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold mr-2">CAREER MENTOR</div>
                    <img
                        src="/logo.png" // Replace with your logo image source
                        alt="Logo"
                        className="h-6"
                    />
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="/">
                        <img
                            src="/facebook.png" // Replace with your social media handle image source
                            alt="Facebook"
                            className="h-6"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/twitter.png" // Replace with your social media handle image source
                            alt="Twitter"
                            className="h-6"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/instagram.png" // Replace with your social media handle image source
                            alt="Instagram"
                            className="h-6"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/linkedin.png" // Replace with your social media handle image source
                            alt="LinkedIn"
                            className="h-6"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/youtube.png" // Replace with your social media handle image source
                            alt="YouTube"
                            className="h-6"
                        />
                    </a>
                </div>
                <div className="flex text-center">
                    <a href="/" className="block mr-12 text-purple-500 mb-2">
                        Terms of Use
                    </a>
                    <a href="/" className="block mr-12 text-purple-500 mb-2">
                        Privacy
                    </a>
                    <a href="/" className="block mr-12 text-purple-500 mb-2">
                        Security
                    </a>
                    <a href="/" className="block mr-12 text-purple-500 mb-2">
                        Legal &amp; Trademark Notice
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LastSection;