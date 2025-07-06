export default function CampPricing({ pricingData }) {
    return (
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
    )
}