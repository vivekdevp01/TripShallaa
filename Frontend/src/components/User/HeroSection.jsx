export default function HeroSection() {
  return (
    <>
    <section className="w-full max-w-screen-2xl mx-auto h-max px-6 py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
      {/* thumbnails */}
      <div className="w-full lg:w-2/3 h-96 flex flex-col sm:flex-row gap-2">
        {/* 1 thumbnail */}
        <div className="relative h-full w-full sm:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fHww"
            alt="Adventure activity"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* 2&3 thumbnail */}
        <div className="flex flex-col h-full w-full sm:w-1/2 gap-2">
          <div className="relative h-1/2 w-full rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://media.istockphoto.com/id/2164477556/photo/low-angle-view-of-woman-climbing-on-cliff.webp?a=1&b=1&s=612x612&w=0&k=20&c=40C1Q6fQ92AblyFhca1sAoueeOMUWoIplADHrmKZUcQ="
              alt="Rock climbing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="relative h-1/2 w-full rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://media.istockphoto.com/id/2167626766/photo/couple-paddle-sup-boards-across-mountain-lake-whistler.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQNB6_sz_UV8KUhkL6WQJ14KWNS4xtwg5Wja5zFy9Ug="
              alt="Paddle boarding"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* text */}
      <div className="w-full lg:w-1/3 p-6">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Book rafting, camping, and adventure activities at unbeatable prices. 
          Trusted, affordable, and unforgettable - your next adventure starts here.
        </p>
        <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md">
          Book Now
        </button>
      </div>
    </section>

    <section className="w-full max-w-screen-2xl mx-auto h-max px-6 py-12 bg-gray-50 rounded-xl">
      
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choosing Us?</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          AdventureHub is your go-to platform for exciting adventures at the most budget-friendly prices. We pride ourselves on offering the lowest rates and affordable packages for rafting, camping, and other thrilling activities. As a trusted and reliable website, we ensure top-quality services, secure bookings, and a memorable experience without breaking the bank. Explore more, spend less, and adventure confidently with AdventureHub!
        </p>

    </section>
    </>
  );
}
