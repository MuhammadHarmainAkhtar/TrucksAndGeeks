import './started.css';
import Pic from '../images/truck3.webp';
import { FaFileAlt, FaHandshake, FaRoad } from 'react-icons/fa';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser'; 
import { useState } from 'react';

const GettingStarted = () => {
    // Function to handle the "Send Documents" button click
    const handleSendDocuments = () => {
        alert('SEND YOUR DOCUMENTS TO: info@trucksandgeeks.com');
    };

    // Function to handle the "Request Agreement" button click
    const handleRequestAgreement = () => {
        const userEmail = prompt("Please enter your email to receive the agreement:");
        
        if (userEmail && validateEmail(userEmail)) {
            // EmailJS parameters for sending the email
            const emailParams = {
                to_email: 'info@trucksandgeeks.com',
                message: `I'm reaching you out from your website. Kindly send me your dispatch proposal to this email: ${userEmail}`
            };

            // Sending email through EmailJS
            emailjs.send('service_b7ic6hv', 'template_xdx2ehp', emailParams, '-7QbJZIRMu9_lkPW3')
                .then((result) => {
                    console.log(result.text);
                    alert('Your request has been sent successfully!');
                }, (error) => {
                    console.log(error.text);
                    alert('Failed to send the request. Please try again.');
                });
        } else {
            alert("Please enter a valid email address.");
        }
    };

    // Helper function to validate email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <section id="started">
            <div className="bg-zinc-900 bg-cover bg-center h-auto parallax">
                <div className="h-[450px] bg-zinc-950 w-full flex justify-center items-center">
                    <div className="text-center max-w-8xl">
                        <p className="text-white text-[24px] md:text-[40px] font-quicksand" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                            From the day my company hit the road, Trucks & Geeks is the one that has my company moving. <br />
                            Great service, transparency and very friendly.
                        </p>
                        <h1 className='text-white pt-6 font-bold text-[10px] md:text-[20px]' style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                            - Eduardo Flores, F & S USA Transport Corp.
                        </h1>
                    </div>
                </div>
                <div className='flex justify-center mt-[-130px]'>
                    <img src={Pic} alt="Truck" className="max-w-full h-auto mt-5" />
                </div>
                <h1 className='flex justify-center font-protest text-red-600 text-[35px] md:text-[45px] mt-10'>GETTING STARTED IS EASY</h1>

                <div className="flex flex-col md:flex-row justify-around max-w-6xl mx-auto mt-10 space-y-4 md:space-y-0 md:space-x-4 pb-8">
                    {/* Card 1 */}
                    <div className="bg-zinc-400 bg-opacity-20 rounded-lg shadow-lg p-6 flex flex-col card-hover w-full md:w-1/4">
                        <div className="flex justify-center mb-4">
                            <FaFileAlt className="text-red-600 text-[40px] md:text-[50px]" />
                        </div>
                        <h2 className="text-center text-red-600 text-[25px] md:text-[30px] font-protest" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                            DOCUMENTS
                        </h2>
                        <p className="font-quicksand text-white text-center mt-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                            MC AUTHORITY LETTER,<br /> INSURANCE CERTIFICATE AND W9 FORM
                        </p>
                        <div className="mt-auto flex justify-center">
                            <button
                                type="button"
                                className="mt-4 bg-red-600 text-white px-4 py-2 rounded border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition duration-300 cursor-pointer"
                                onClick={handleSendDocuments}
                            >
                                SEND DOCUMENTS
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-400 bg-opacity-20 rounded-lg shadow-lg p-6 flex flex-col card-hover w-full md:w-1/4">
                        <div className="flex justify-center mb-4">
                            <FaHandshake className="text-red-600 text-[40px] md:text-[50px]" />
                        </div>
                        <h2 className="text-center text-red-600 text-[25px] md:text-[30px] font-protest" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                            SIGN AGREEMENT
                        </h2>
                        <p className="font-quicksand text-white text-center mt-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                            Sign a quick and easy dispatch service level agreement
                        </p>
                        <div className="mt-auto flex justify-center">
                            <button
                                type="button"
                                className="mt-4 bg-red-600 text-white px-4 py-2 rounded border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition duration-300 cursor-pointer"
                                onClick={handleRequestAgreement}
                            >
                                REQUEST AGREEMENT
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-400 bg-opacity-20 rounded-lg shadow-lg p-6 flex flex-col card-hover w-full md:w-1/4">
                        <div className="flex justify-center mb-4">
                            <FaRoad className="text-red-600 text-[40px] md:text-[50px]" />
                        </div>
                        <h2 className="text-center text-red-600 text-[25px] md:text-[30px] font-protest" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
                            HIT THE ROAD!
                        </h2>
                        <p className="font-quicksand text-white text-center mt-2" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                            We start dispatching your truck immediately.
                        </p>
                        <div className="mt-auto flex justify-center">
                            <Link to="data" smooth={true} duration={500}>
                                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition duration-300 cursor-default">
                                    HIRE A DISPATCHER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GettingStarted;
