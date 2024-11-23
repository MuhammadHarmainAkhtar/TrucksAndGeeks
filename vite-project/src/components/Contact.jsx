import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "./Button";
import { useState, useRef, useEffect, forwardRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactInfoItem = ({ title, children }) => (
    <div className="flex flex-col gap-2 w-full">
        <div className="text-xl font-bold">{title}</div>
        {children}
    </div>
);

const ContactFormField = ({ label, type, name, placeholder, value, onChange }) => (
    <>
        <label htmlFor={name} className="sr-only">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-red-600 rounded-md py-3 px-3 w-full placeholder:text-red-600 placeholder:text-sm"
        />
    </>
);

const Contact = forwardRef(({ finalData }, ref) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
    });

    useEffect(() => {
        if (finalData) {
            setFormData({
                user_name: finalData.firstName || '',
                user_email: finalData.email || '',
                user_phone: finalData.phone || '',
                message: ''
            });
        }
    }, [finalData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, user_phone, message } = formData;
        if (!user_name || !user_email || !user_phone || !message) {
            alert("Please fill in all fields: Name, Email, Phone, and Message.");
            return;
        }

        emailjs.send('service_t6tu8wh', 'template_7vnpz6k', {
            user_name: formData.user_name,
            user_email: formData.user_email,
            user_phone: formData.user_phone,
            message: formData.message,
            plan: finalData?.plan || 'N/A',
            trucks: finalData?.trucks || 'N/A',
            income: finalData?.income || 'N/A',
            truckType: finalData?.truckType?.join(', ') || 'N/A'
        }, '-7QbJZIRMu9_lkPW3')
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    message: ''
                });
            }, (error) => {
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" ref={ref}>
            <div className="flex flex-col items-center w-full">
                <section className="container">
                    <div className="flex justify-center py-14 items-center gap-12 flex-col sm:flex-row">
                        <div className="pl-10 w-full grid gap-8 font-quicksand">
                            <ContactInfoItem title="Head Office">
                                <address className="break-words w-full">
                                    2451 Atrium Way Nashville, Tennessee (37214), USA
                                </address>
                            </ContactInfoItem>
                            <ContactInfoItem title="Contact Details:">
                                <div className="flex items-center gap-1 w-full break-words">
                                    <FaPhoneAlt color="#60a5fa" />
                                    <span className="break-all">+1 (423) 212-3254</span>
                                </div>
                                <div className="flex items-center gap-1 w-full break-words">
                                    <IoMdMail color="#fde047" />
                                    <span className="break-all">info@trucksandgeeks.com</span>
                                </div>
                            </ContactInfoItem>
                        </div>
                        <div className="w-full p-8">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <div className="p-2 text-[40px] md:text-6xl font-protest">
                                        Get In Touch With Us.
                                    </div>
                                    <div className="pl-4 font-2xl font-quicksand">
                                        To better understand how we can help you grow your business.
                                    </div>
                                </div>
                                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                                    <ContactFormField
                                        label="Name"
                                        type="text"
                                        name="user_name"
                                        placeholder="Name*"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                    />
                                    <ContactFormField
                                        label="Email"
                                        type="email"
                                        name="user_email"
                                        placeholder="Email*"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                    <ContactFormField
                                        label="Phone"
                                        type="text"
                                        name="user_phone"
                                        placeholder="Phone*"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="h-full border border-red-600 rounded-md py-3 px-3 w-full placeholder:text-red-600 placeholder:text-sm"
                                    ></textarea>
                                    <Button text="Send Message" width={true} />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
});

export default Contact;
