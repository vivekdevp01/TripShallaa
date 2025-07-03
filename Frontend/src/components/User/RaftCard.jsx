import locationIcon from '../../assets/location.svg';
import clockIcon from '../../assets/clock.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RaftCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* img */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-44 object-cover"
      >
        {data.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${data.title} - ${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4">
        
        <p className="text-sm font-medium text-purple-600 mb-1">{data.time}</p>
        

        <h3 className="text-lg font-bold text-gray-800 mb-1">{data.title || data.description}</h3>
        
        <div className="flex items-center gap-1.5 mb-2">
          <img src={locationIcon} alt="Location" className="w-4 h-4" />
          <span className="text-sm text-gray-700">{data.location}</span>
        </div>
        
        {/* distance  */}
        {data.distance && (
          <div className="flex items-center gap-1.5 mb-3">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <span className="text-sm text-gray-700">Distance: {data.distance}</span>
          </div>
        )}
        
        {/* inr */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{data.price.toLocaleString()}</span>
          {data.originalPrice && (
            <span className="text-sm line-through text-gray-400">₹{data.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        
        <button className="w-full py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}