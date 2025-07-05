import React from 'react';
import { campData, pricingData } from "../../utils/data"
import { Link } from "react-scroll"

export default function MountainViewCamp() {
    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            {/* <header className="bg-white shadow-md rounded-full fixed w-max z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                    <div className="md:hidden">
                        <button className="text-green-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header> */}

            {/* hero section */}
            <section id="home" className="relative h-screen pt-20">
  {/* bg img */}
  <div className="absolute inset-0">
    <img
      src={campData.gallery[0].src}
      alt="Mountain View Camp"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-40"></div>
  </div>

  {/* navs */}
  <nav className="hidden md:block absolute top-8 right-8 z-10">
      <ul className="flex space-x-3">
        {/* Home Button */}
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your header height
            duration={500}
            className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative z-10">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2 inline" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </span>
          </Link>
        </li>

        {/* Other Navigation Links */}
        {[
          { to: "about", text: "About Camp", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
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
              className="relative overflow-hidden group border-2 border-green-700 hover:border-orange-500 text-green-700 hover:text-orange-500 font-medium py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 inline" 
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


  {/* content */}
  <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Mountain View Camp Rishikesh</h1>
      <p className="text-xl text-white mb-8">Experience the perfect blend of adventure and tranquility at our riverside camping site in Rishikesh</p>
      <Link
      to="#contact"
      className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
    >
      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      
      <span className="relative z-10 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
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

            {/* about */}
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">About Mountain View Camp</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* <div className="md:w-1/2">
                            {campData.gallery.map((img,index) => {
                                return(
                                    <img
                                    key={index}
                                src={img.src}
                                alt="About Mountain View Camp"
                                className="rounded-lg shadow-lg"
                            />        
                                )
                            })}
                            
                        </div> */}
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-700 mb-6">
                                Mountain View Camp is a beautiful riverside camping site in Rishikesh, nestled in the foothills of the Himalayas along the banks of the holy Ganges river. Our camp offers a perfect blend of adventure and tranquility with stunning views of the surrounding mountains.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                We provide comfortable Swiss tents with attached washrooms, delicious meals, and a range of adventure activities to make your stay memorable. Whether you're looking for a peaceful retreat or an action-packed adventure, Mountain View Camp has something for everyone.
                            </p>
                            <ul className="space-y-3">
                                {campData.highlights.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* gallery */}
            <section id="gallery" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Gallery</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campData.gallery.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* amenity */}
            <section id="amenities" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Amenities & Facilities</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {campData.amenities.map((item, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition duration-300">
                                <div className="text-4xl mb-4 text-orange-500">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-green-800">{item.name}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* activity */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-green-800 mb-4">Adventure Activities</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {campData.activities.map((activity, index) => (
                            <span
                                key={index}
                                className="bg-white px-6 py-3 rounded-full shadow-sm text-green-800 font-medium hover:bg-orange-500 hover:text-white transition duration-300"
                            >
                                {activity}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* pricing */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Packages for Mountain View Camps
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* pricing card */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* night pricing */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
            <div className="bg-green-700 px-5 py-3">
              <h3 className="text-lg font-semibold text-white">
                {pricingData.camping.title}
              </h3>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {pricingData.camping.table.rows.map((row, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
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

          {/* pricing */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
            <div className="bg-green-700 px-5 py-3">
              <h3 className="text-lg font-semibold text-white">
                {pricingData.rafting.title}
              </h3>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {pricingData.rafting.table.rows.map((row, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                    <div className="flex justify-between mb-1">
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
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <p className="font-semibold text-orange-700 mb-4">NOTE: {pricingData.notes[0]}</p>
            <p className="text-center text-green-700 font-medium mb-6">{pricingData.contactText}</p>
            <ul className="space-y-2">
              {pricingData.notes.slice(1).map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>

      </div>
    </section>

            
            {/* form */}
            <section id="contact" className="py-16 bg-green-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 mt-1 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <p>{campData.contact.address}</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <p>{campData.contact.phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <p>{campData.contact.email}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-green-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-green-300"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone"
                                        className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-green-300"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded bg-green-900 bg-opacity-50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-green-300"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}