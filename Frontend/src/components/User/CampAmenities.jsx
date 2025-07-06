export default function CampAmenities({ campData }) {
    return (
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
    )
}