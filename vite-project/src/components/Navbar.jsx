import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section id="home">
            <nav className="fixed bg-black bg-opacity-50 text-white px-4 sm:px-8 py-8 top-0 right-0 left-0 shadow-lg z-50 border-b-4 border-red-600 transition-all duration-300">
                <div className="flex justify-between items-center w-full">
                    {/* Logo */}
                    <div>
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                            <h1 className="text-[40px] sm:text-[50px] font-protest">
                                Trucks <span className="text-white">&</span> <span className="text-red-600">Geeks</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="text-[18px] flex gap-8 items-center font-quicksand">
                            {['home', 'plans', 'faqs', 'contact'].map((section, idx) => (
                                <li key={idx} className="duration-300 relative group">
                                    <Link to={section} smooth={true} duration={500} className="cursor-pointer capitalize">
                                        {section.replace(/_/g, ' ')}
                                    </Link>
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </li>
                            ))}
                            <li>
                                <Link to="started" smooth={true} duration={500}>
                                    <button className="bg-red-600 border border-red-600 text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-red-600 hover:border-red-600 duration-300">
                                        Start Today
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden z-50">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white py-10 px-4 transition-all duration-300`}
                >
                    <ul className="flex flex-col items-center gap-8">
                        {['home', 'plans', 'faqs', 'contact'].map((section, idx) => (
                            <li key={idx} className="duration-300 relative group">
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer text-xl capitalize"
                                    onClick={toggleMenu}
                                >
                                    {section.replace(/_/g, ' ')}
                                </Link>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </li>
                        ))}
                        <li>
                            <Link to="started" smooth={true} duration={500}>
                                <button
                                    className="bg-red-600 border border-red-600 text-white px-6 py-3 rounded-full hover:bg-transparent hover:text-red-600 hover:border-red-600 duration-300"
                                    onClick={toggleMenu}
                                >
                                    Start Today
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
