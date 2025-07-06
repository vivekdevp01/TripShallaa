export default function CampImage({ campData }) {
    return (
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
    )
}