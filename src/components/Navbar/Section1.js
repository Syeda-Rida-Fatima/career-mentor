import React from 'react';
import A1 from '../../images/about1.svg';
import A2 from '../../images/about2.svg';
import A3 from '../../images/about3.jpg';
function Section1() {

    return (
        <section className="flex justify-center py-8">
            <div className="flex flex-column w-35 space-x-8">
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <img
                        src={A1}// Replace with your image source
                        alt="Image 1"
                        className="w-auto h-auto object-cover p-4 rounded"
                    />
                    <div className="text-center mt-4">
                        <h3 className="text-lg font-bold">Card 1</h3>
                        <p>assess yourself</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <img
                        src={A2} // Replace with your image source
                        alt="Image 2"
                        className="w-auto h-auto object-cover p-4 rounded"
                    />
                    <div className="text-center mt-4">
                        <h3 className="text-lg font-bold">Card 2</h3>
                        <p>choose your career rightly

                        </p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <img
                        src={A1} // Replace with your image source
                        alt="Image 3"
                        className="w-auto h-auto object-cover p-4 rounded"
                    />
                    <div className="text-center mt-4">
                        <h3 className="text-lg font-bold">Card 3</h3>
                        <p>check your personality traits</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
// import React from 'react';
// import A1 from '../../images/about1.svg';
// import A2 from '../../images/about2.svg';
// import A3 from '../../images/about3.jpg';

// function Section1() {
//     return (
//         <section className="flex justify-center py-8">
//             <div className="flex w-35 space-x-8">
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A1}
//                             alt="Image 1"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 1</h3>
//                         <p>assess yourself</p>
//                     </div>
//                 </div>
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A2}
//                             alt="Image 2"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 2</h3>
//                         <p>choose your career rightly</p>
//                     </div>
//                 </div>
//                 <div className="flex-grow bg-white p-4 rounded shadow card">
//                     <div className="flex items-center justify-center h-4/5">
//                         <img
//                             src={A1}
//                             alt="Image 3"
//                             className="w-auto h-auto object-cover rounded"
//                         />
//                     </div>
//                     <div className="text-center mt-4">
//                         <h3 className="text-lg font-bold">Card 3</h3>
//                         <p>check your personality traits</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Section1;
