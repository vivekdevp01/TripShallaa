import { Link } from 'react-scroll';
import { toast } from 'react-toastify';

export default function CampDetailHeroSection( {campData} ) {
    const checkFormCompletion = () => {
        return localStorage.getItem('contactFormCompleted') === 'true';
    };

    const handleBookingClick = (e) => {
        if (!checkFormCompletion()) {
            e.preventDefault();
            toast.warn('Please complete the contact form before booking', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    return (
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
                        to={checkFormCompletion() ? "booking-section" : "contact-form"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleBookingClick}
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
                            {checkFormCompletion() ? 'Complete Booking' : 'Book Now'}
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

