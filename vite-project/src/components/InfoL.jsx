import { Link } from 'react-scroll';

const InfoL = () => {
    return (
        <div
            className="bg-[url('./images/infopageimage.jpg')] bg-cover parallax bg-center min-h-screen flex items-center justify-center" // Center content vertically and horizontally
            style={{
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div className="flex flex-col items-center text-center">
                {/* Headline 1 */}
                <h1
                    className="text-white text-[5vw] md:text-[4.5vw] lg:text-[3vw] font-protest"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
                >
                    We Get The Loads,
                </h1>
                {/* Headline 2 */}
                <h1
                    className="text-red-600 text-[5vw] md:text-[4.5vw] lg:text-[3vw] font-protest mt-[-1vw]"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
                >
                    You Drive.
                </h1>
                {/* Paragraph */}
                <p className="font-quicksand text-white text-[4vw] md:text-[3vw] lg:text-[2.5vw] mt-4 md:mt-4 lg:mt-4 px-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    We find the best paying loads in the market. Get a personal dispatcher assigned for you and don't worry any more about your payments or empty miles. Dispatch has never been so good!
                </p>
                
                {/* Big Heading */}
                <div className="font-protest mt-[5vw] md:mt-[5vw] lg:mt-[5vw]">
                    <h1 className="text-red-600 text-[5vw] md:text-[4.5vw] lg:text-[4vw]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>ALL</h1>
                    <p className="text-white text-[4vw] md:text-[4.5vw] lg:text-[3.5vw] mt-[-1vw]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                        Hotshots, Box & Semi-Trucks
                    </p>
                </div>

                {/* Button */}
                <div>
                    <Link to="data" smooth={true} duration={500}>
                        <button className="rounded-[40px] mt-6 mb-10 bg-red-600 border border-red-600 text-white text-[3.5vw] md:text-[2.5vw] lg:text-[1.8vw] font-quicksand px-6 md:px-8 py-3 md:py-4 shadow-lg hover:bg-transparent hover:text-red-600 transition duration-300">
                            Hire a Dispatcher
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InfoL;
