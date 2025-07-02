import locationIcon from '../../assets/location.svg'
import clockIcon from '../../assets/clock.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function RaftCard({data}) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
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
        <p className="font-semibold text-2xl">
          {data.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <img src={locationIcon} alt="Location Icon" className="w-4 h-4" />
          <span className="font-medium text-xl">
            {data.location}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <img src={clockIcon} alt="Location Icon" className="w-4 h-4" />
          <span className="font-medium text-xl">
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
