export default function CampDetail({ campData }) {
    return(
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
    )
}