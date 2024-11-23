import './Data.css';
import Button from './Button';
import { Link } from 'react-scroll';
import { useState, useRef } from 'react';

const FinalData = ({ setFinalData, contactRef }) => {
    const [formData, setFormData] = useState({
        plan: '',
        trucks: '',
        email: '',
        truckType: [],
        income: '',
        firstName: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                truckType: checked
                    ? [...formData.truckType, value]
                    : formData.truckType.filter((t) => t !== value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = () => {
        setFinalData({
            plan: formData.plan,
            trucks: formData.trucks,
            income: formData.income,
            truckType: formData.truckType,
            firstName: formData.firstName,
            phone: formData.phone,
            email: formData.email,
        });
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        setFormData({
            plan: '',
            trucks: '',
            email: '',
            truckType: [],
            income: '',
            firstName: '',
            phone: ''
        });
    };

    return (
        <section id="data">
            <div className={`bg-[url('./images/finalData.jpg')] bg-cover bg-center min-h-screen parallax`}>
                <div className='flex bg-opacity-20 justify-center w-full h-full pt-10 sm:pt-64'>
                    <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-3 gap-5 py-8 sm:py-16 px-4 md:px-16 lg:px-20 w-full">
                        <div className="flex flex-col w-full gap-8">
                            <h2 className="text-2xl sm:text-4xl font-protest text-red-600">
                                Tell us about your goals and let us help
                            </h2>
                            <p className="text-base sm:text-lg font-quicksand text-white">
                                Having some idea of what your company needs or what your hauling plans and desires
                                will help us provide the best dispatch service solution for your trucking company.
                                Complete the form now and start today!
                            </p>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <select
                                name="plan"
                                value={formData.plan}
                                onChange={handleChange}
                                className="text-red-600 font-bold border bg-red-200 border-red-600 rounded-md py-3 px-2"
                            >
                                <option disabled selected value="">Interested Plans</option>
                                <option value="Percentage">Percentage</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Prepaid">Prepaid</option>
                            </select>
                            <select
                                name="trucks"
                                value={formData.trucks}
                                onChange={handleChange}
                                className="text-red-600 font-bold border bg-red-200 border-red-600 rounded-md py-3 px-2"
                            >
                                <option disabled selected value="">How many trucks do you have?</option>
                                <option value="1 truck">1 truck</option>
                                <option value="2 trucks">2 trucks</option>
                                <option value="Between 3 - 10 trucks">Between 3 - 10 trucks</option>
                            </select>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="text-red-600 font-bold border bg-red-200 border-red-600 rounded-md py-3 px-3 w-full placeholder:text-red-600 placeholder:font-bold placeholder:text-sm"
                            />
                            <div className="mt-6">
                                <div className="flex flex-col gap-2">
                                    <span className="font-bold text-red-600">Which type of truck do you have?</span>
                                    {['Dry Van', 'Reefer', 'Flatbed', 'Power Only'].map((type) => (
                                        <label className="text-white font-bold flex items-center gap-x-2" key={type}>
                                            <input
                                                type="checkbox"
                                                value={type}
                                                checked={formData.truckType.includes(type)}
                                                onChange={handleChange}
                                                className="accent-red-600"
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-4 flex flex-col gap-4">
                            <input
                                type="text"
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                                placeholder="Income desired?"
                                className="text-red-600 font-bold border rounded-md bg-red-200 border-red-600 p-3 w-full placeholder:text-red-600 placeholder:text-sm placeholder:font-bold"
                            />
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="text-red-600 font-bold border rounded-md bg-red-200 border-red-600 p-3 w-full placeholder:text-red-600 placeholder:text-sm placeholder:font-bold"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="text-red-600 font-bold border rounded-md bg-red-200 border-red-600 p-3 w-full placeholder:text-red-600 placeholder:text-sm placeholder:font-bold"
                            />
                            <Link to="contact" smooth={true} duration={500} className="inline-block w-full" onClick={handleSubmit}>
                                <Button text='Start Today!' width={true} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalData;
