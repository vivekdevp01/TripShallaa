import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* img */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-40 object-cover"
      >
        {service.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${service.title} - ${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4">
        
        <p className="text-sm font-medium text-purple-600 mb-1">{service.duration}</p>
        

        <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
        

        <p className="text-sm text-gray-500 mb-2">By {service.provider}</p>
        
        {/* inr */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">INR {service.price.toLocaleString()}</span>
          <span className="text-sm line-through text-gray-400">INR {service.originalPrice.toLocaleString()}</span>
        </div>
        

        <button className="w-full py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}