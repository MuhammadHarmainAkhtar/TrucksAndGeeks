import { useState } from 'react';
import { faqsData } from './faqsData';
import FAQItem from './FAQItem';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full flex flex-col gap-8 px-16 text-red-600 font-quicksand">
            {faqsData.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={index === openIndex}
                    toggleOpen={() => toggleOpen(index)}
                />
            ))}
        </div>
    );
};

export default FAQ;