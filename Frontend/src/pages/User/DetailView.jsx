import React, { useState } from 'react';
import { campData, pricingData } from "../../utils/data";
import { Link } from "react-scroll";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MountainViewCamp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('https://api/v1/', formData);

            if (response.status === 200) {
                toast.success('Thank you! Your message has been sent successfully.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Something went wrong. Please try again later.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="font-sans text-gray-800 overflow-x-hidden">
            {/* hero */}
            <section id="home" className="relative h-screen pt-16 md:pt-20">
                {/* bg img */}
                <div className="absolute inset-0">
                    <img
                        src={campData.gallery[0].src}
                        alt="Mountain View Camp"
                        className="w-full h-full object-fit"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                </div>

                {/* navs */}
                <nav className="hidden md:block absolute top-4 md:top-8 right-4 md:right-8 z-10">
                    <ul className="flex flex-wrap justify-end gap-2">
                        {[
                            { to: "home", text: "Home", icon: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" },
                            { to: "about", text: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { to: "gallery", text: "Gallery", icon: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" },
                            { to: "amenities", text: "Amenities", icon: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
                            { to: "contact", text: "Contact", icon: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer text-sm md:text-base"
                                >
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                                    <span className="relative z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 inline"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                                        </svg>
                                        {item.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* mobile menu */}
                <button className="md:hidden absolute top-4 right-4 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* content */}
                <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 z-10">
                    <div className="max-w-3xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            Mountain View Camp Rishikesh
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-2 sm:px-0">
                            Experience the perfect blend of adventure and tranquility at our riverside camping site in Rishikesh
                        </p>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base"
                        >
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                            <span className="relative z-10 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Book Now
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* camp detail */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">About Mountain View Camp</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            {campData.gallery.slice(0, 4).map((img, index) => (
                                <div key={index} className={`${index === 0 ? 'col-span-2' : ''} overflow-hidden rounded-xl shadow-lg`}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Mountain View Camp is a beautiful riverside camping site in Rishikesh, nestled in the foothills of the Himalayas along the banks of the holy Ganges river. Our camp offers a perfect blend of adventure and tranquility with stunning views of the surrounding mountains.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                We provide comfortable Swiss tents with attached washrooms, delicious meals, and a range of adventure activities to make your stay memorable. Whether you're looking for a peaceful retreat or an action-packed adventure, Mountain View Camp has something for everyone.
                            </p>
                            <ul className="space-y-4">
                                {campData.highlights.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* imgs */}
            <section id="gallery" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">Gallery</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                            Explore the breathtaking views and exciting activities at our camp
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campData.gallery.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* amenity */}
            <section id="amenities" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">Amenities & Facilities</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                            Everything you need for a comfortable and memorable stay
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {campData.amenities.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                                <div className="p-6 text-center">
                                    <div className="bg-orange-100 text-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* activities */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">Adventure Activities</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                            Exciting experiences to make your stay unforgettable
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {campData.activities.map((activity, index) => (
                            <span
                                key={index}
                                className="bg-white px-6 py-3 rounded-full shadow-sm text-green-800 font-medium hover:bg-orange-500 hover:text-white transition duration-300 hover:shadow-md"
                            >
                                {activity}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">Packages & Pricing</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                        <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                            Affordable options for every adventurer
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* night pricing */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                                <h3 className="text-xl font-semibold text-white text-center">
                                    {pricingData.camping.title}
                                </h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-5">
                                    {pricingData.camping.table.rows.map((row, index) => (
                                        <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0">
                                            <span className="font-medium text-gray-700">{row[0]}</span>
                                            <div className="text-right">
                                                <p className="text-green-600 font-medium">{row[1]}</p>
                                                <p className="text-orange-600 font-medium">{row[2]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* raft pricing */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                                <h3 className="text-xl font-semibold text-white text-center">
                                    {pricingData.rafting.title}
                                </h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-5">
                                    {pricingData.rafting.table.rows.map((row, index) => (
                                        <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-medium text-gray-700">{row[0]}</span>
                                                <span className="text-orange-600 font-medium">{row[3]}</span>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                {row[1]} to {row[2]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* note */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                        <p className="font-semibold text-orange-700 mb-4">NOTE: {pricingData.notes[0]}</p>
                        <p className="text-center text-green-700 font-medium text-lg mb-6">
                            {pricingData.contactText}
                        </p>
                        <ul className="space-y-3">
                            {pricingData.notes.slice(1).map((note, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="bg-orange-100 text-orange-500 rounded-full p-1 mr-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* form */}
            <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
                        <div className="w-20 h-1.5 bg-white bg-opacity-70 mx-auto rounded-full"></div>
                        <p className="text-xl text-white text-opacity-90 mt-6 max-w-3xl mx-auto">
                            Reach out to book your adventure or ask any questions about our camps
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* contact */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white text-opacity-90 text-lg">{campData.contact.address}</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white text-opacity-90 text-lg">{campData.contact.phone}</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-white/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-white text-opacity-90 text-lg">{campData.contact.email}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h4 className="text-xl font-medium text-white mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {['facebook', 'instagram', 'twitter'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300"
                                        >
                                            <span className="sr-only">{social}</span>
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                {/* handles */}
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* query */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
                            <ToastContainer />
                            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone"
                                        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-white hover:bg-white/90 text-orange-600 font-bold py-4 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}