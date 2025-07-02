import { RaftCard } from "../index.components.js";

export default function RaftingSection() {
  const raftingData = [
    {
      title: "Bhrampuri to Rishikesh",
      description: "Bhrampuri to Rishikesh",
      location: "Distance - 9KM",
      time: "2 hours - 3 hours",
      price: 499,
      originalPrice: 799,
      images: [
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      title: "Shiypuri to Rishikesh",
      description: "Shiypuri to Rishikesh",
      location: "Distance - 16KM",
      time: "2 hours - 3 hours",
      price: 549,
      originalPrice: 899,
      images: [
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60"
      ]
    },
    {
      title: "Marine Drive to Rishikesh",
      description: "Marine Drive to Rishikesh",
      location: "Distance - 26KM",
      time: "3 hours - 4 hours",
      price: 999,
      originalPrice: 1599,
      images: [
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=60"
      ]
    }
  ];

  return (
    <section className="w-full max-w-screen-2xl px-6 py-12">
      <h2 className="text-xl md:text-3xl font-medium mb-4">Rafting</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {raftingData.map((raft, index) => (
          <RaftCard key={index} data={raft} />
        ))}
      </div>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
}