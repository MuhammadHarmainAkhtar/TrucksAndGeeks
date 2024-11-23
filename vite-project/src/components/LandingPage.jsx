import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [text] = useTypewriter({
        words: ['DISPATCHING.', 'SOLUTIONS.'],
        loop: 0, // Infinite loop
    });

    return (
        <div 
            className={`bg-[url('./images/landingimage.jpg')] bg-cover bg-center h-screen transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                transform: `translateY(${scrollY * 0.5}px)`
            }}
        >
            <div className='App relative z-10 flex flex-col justify-center items-center h-full'>
                <h1 
                    className='text-white font-protest text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] text-center'
                    style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}  
                >
                    WE PROVIDE{' '}
                    <span 
                        className='text-red-600'
                        style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }} 
                    >
                        {text}
                    </span>
                    <Cursor />
                </h1>
            </div>
            <div className="absolute inset-0 bg-black text-white opacity-30 z-0"></div>
        </div>
    );
};

export default LandingPage;
