import FAQ from './FAQ/FAQ';

const FAQs = () => {
    return (
        <section id="faqs">
            <div className='bg-black flex flex-col items-center pt-10 pb-36 gap-20'>
                <h1 className="text-[40px] font-protest text-red-600 text-center">Frequently Asked Questions</h1>
                <FAQ />
            </div>
        </section>
    )
}

export default FAQs;