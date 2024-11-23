import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 },
    };

    const renderAnswerText = (text) => text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="border-b border-gray-300 pb-8">
            <button
                className="flex justify-between items-center w-full py-2 text-left text-lg font-medium"
                onClick={toggleOpen}
                aria-expanded={isOpen}
            >
                {question}
                <svg
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <motion.div
                initial="collapsed"
                animate={isOpen ? "open" : "collapsed"}
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="py-2 text-red-400">
                    {renderAnswerText(answer)}
                    <div className="mt-8 flex space-x-2">
                        <FaFacebook className="text-red-600" />
                        <FaTwitter className="text-red-600" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FAQItem;
