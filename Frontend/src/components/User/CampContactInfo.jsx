import { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CampContactInfo({ onFormComplete , campData }) {
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
      const response = await axios.post('https://api/v1/Dat');
      
      if (response.status === 200) {
        toast.success('Thank you! Your message has been sent successfully.');
        localStorage.setItem('contactFormCompleted', 'true');
        if (onFormComplete) onFormComplete();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
    return (
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
    )
}