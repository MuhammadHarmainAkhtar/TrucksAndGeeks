import '../components/planspricing.css';

const Plans_pricing = () => {
    return (
        <section id="plans" className="relative">
            <div
                className="bg-[url('./images/PlansPricing.jpg')] bg-cover bg-center min-h-screen parallax"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div className="flex flex-col items-center h-full px-16 py-10">
                    <div className="flex flex-col justify-center mb-10 text-center">
                        <div className="text-red-600 text-[50px] font-protest flex flex-col md:flex-row justify-center md:mt-10">
                            <h1 className='text-[60px]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Our Plans</h1>
                            <h1 className='text-white mx-2 text-[60px]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>&</h1>
                            <h1 className="text-[60px]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Pricing.</h1>
                        </div>
                        <p className="text-white text-[20px] max-w-xl font-quicksand" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                            Choose the best plan that fits your needs and budget. We provide exceptional services at competitive prices.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-around mx-auto gap-10 md:mt-[200px]">
                        {/* Card 1 */}
                        <div className="bg-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm hover:bg-opacity-30 transition-all duration-300 cursor-default">
                            <h5 className="font-protest mb-2 text-[40px] tracking-tight text-red-600" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                PERCENTAGE
                            </h5>
                            <p className="font-protest text-white text-[30px] font-bold" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                5% Weekly
                                <span className="text-[20px] font-quicksand text-white">(8% for Box Trucks)</span>
                            </p>
                            <p className="font-quicksand text-white" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                PAY AS YOU GO <br /> LOADS OF YOUR CHOICE <br /> PRO ACTIVE ENGAGEMENT
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm hover:bg-opacity-30 transition-all duration-300 cursor-default">
                            <h5 className="font-protest mb-2 text-[40px] tracking-tight text-red-600" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                FLAT FEE
                            </h5>
                            <p className="font-protest text-white text-[30px] font-bold" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                280$
                                <span className="text-[20px] font-quicksand text-white">(350$ for Box Trucks)</span>
                            </p>
                            <p className="font-quicksand text-white" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                WEEKLY BILLING <br /> HIGH PRIORITY AVAILABILITY <br /> DISPUTE MANAGEMENT
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white bg-opacity-20 border border-gray-200 rounded-lg shadow-lg p-6 max-w-sm hover:bg-opacity-30 transition-all duration-300 cursor-default">
                            <h5 className="font-protest mb-2 text-[40px] tracking-tight text-red-600" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                MONTHLY PREPAID
                            </h5>
                            <p className="font-protest text-white text-[30px] font-bold" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                1000$
                                <span className="text-[20px] font-quicksand text-white">(1250$ for Box Trucks)</span>
                            </p>
                            <p className="font-quicksand text-white" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
                                DEDICATED DISPATCHER <br /> 24/7 SUPPORT <br /> AUTOMATED BILLING
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans_pricing;
