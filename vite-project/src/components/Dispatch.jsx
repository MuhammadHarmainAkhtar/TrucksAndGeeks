import { Link } from 'react-scroll';

const Dispatch = () => {
    return (
        <div className={`bg-[url('./images/background.webp')] bg-cover bg-center min-h-[120vh] parallax`} // Extended the height to avoid overflow
             style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='px-4 md:px-10'>
                {/* Title with smaller, responsive font size */}
                <p className='pl-2 text-white font-protest'
                    style={{
                        fontSize: 'clamp(45px, 3vw, 50px)', // Reduced font size for the heading
                        paddingTop: '120px', // Reduced padding to save space
                        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)',
                    }}>
                    Trucks & <span className="text-red-600 ml-2 mr-2" style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)' }}>
                        GEEKS</span> is your freight planning partner.
                </p>
            </div>

            <div className='mt-[100px] px-4 md:px-10 flex flex-col items-start'>
                {/* Paragraph with smaller, responsive font size */}
                <p className="font-bold text-black font-quicksand"
                    style={{
                        fontSize: 'clamp(18px, 2vw, 30px)', // Reduced font size for the paragraph
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                        maxWidth: '850px' // Slightly reduced max-width for better spacing
                    }}>
                    Our services are mainly for owner operators, independent truckers & carriers with their own DOT or MC authority.
                    It's in our best interest for us to find the best paying loads available for you. We dispatch dry-vans, reefers,
                    flatbeds. We find you the best truck loads in the US. We help you improve your profits and experience. Whether you
                    are looking for your next load or you need a load that takes you home, Trucking Assist is committed to your goals.
                    For us to be successful, you must be successful first. We are the best dispatch service in the US.
                </p>

                <div className='mt-6 mb-6'>
                    <Link to="started" smooth={true} duration={500}>
                        {/* Smaller button */}
                        <button className="mt-[80px] mx-auto bg-red-600 text-white px-24 md:px-32 py-3 rounded-[25px] border-2 border-red-600 
                            hover:bg-transparent hover:border-red-600 hover:text-black transition duration-300"
                            style={{ transition: 'border-color 0.3s, background-color 0.3s, color 0.3s' }}>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dispatch;
