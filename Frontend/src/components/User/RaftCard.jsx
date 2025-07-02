import locationIcon from '../../assets/location.svg'
import clockIcon from '../../assets/clock.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function RaftCard({data}) {
  //  this is the format of data
  //   const data = {
  //   title: "Bhrampuri to Rishikesh",
  //   description: "36 Km River Rafting Kaudiyala to Nim Beach",
  //   location: "Kaudiyala to Nim Beach (36 Km)",
  //   time:" 4 hour to 4.5 hour",
  //   price: 499,
  //   originalPrice: 799,
  //   images: ["https://plus.unsplash.com/premium_photo-1749559496325-5bbde2f8335c?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1747738304810-5cb89f585299?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://plus.unsplash.com/premium_photo-1747664078762-4e72337921c0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   ]
  // };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      {/* <img src={data.image} alt={data.title} className="w-full h-48 object-cover" /> */}
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="w-full h-48 object-cover"
      >
        {data.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-48 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4">
        <p className="font-semibold text-2xl text-neutral-700">
          {data.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <img src={locationIcon} alt="Location Icon" className="w-4 h-4" />
          <span className="text-neutral-700 font-medium text-xl">
            {data.location}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <img src={clockIcon} alt="Location Icon" className="w-4 h-4" />
          <span className="text-neutral-700 font-medium text-xl">
            {data.time}
          </span>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-lg font-bold text-black">INR {data.price}</span>
          <span className="line-through text-gray-400">
            INR {data.originalPrice}
          </span>
        </div>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition">
          Book Now
        </button>
      </div>
    </div>
  )
}
