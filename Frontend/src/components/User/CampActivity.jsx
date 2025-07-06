export default function CampActivity({ campData }) {
    return (
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
    )
}