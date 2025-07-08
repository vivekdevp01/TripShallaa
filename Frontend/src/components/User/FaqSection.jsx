import React, { useState } from 'react'

const faqs = [
  {
    question:
      'Which are the best adventure sports that can be done with camping in Rishikesh?',
    answer: (
      <div>
        <p className="mb-2">
          Rishikesh offers an array of adventure activities and is known as the
          adventure hub of India. While staying at a camp, you can enjoy:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Water Sports:</strong> White water rafting, kayaking, cliff
            jumping, body surfing
          </li>
          <li>
            <strong>Trekking:</strong> Waterfall trek, Kunjapuri trek, village
            hiking
          </li>
          <li>
            <strong>Air Activities:</strong> Zipline over the Ganga, bungee
            jumping, sky cycle, flying fox, giant swing, reverse bungee
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Which are the best packages for camping in Rishikesh?',
    answer: (
      <table className="w-full text-sm border border-collapse border-gray-300 mt-2">
        <thead>
          <tr className="bg-orange-100">
            <th className="border p-2 text-left">Camping Type</th>
            <th className="border p-2 text-left">Starting Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Camps with Common Washroom</td>
            <td className="border p-2">₹1000/person</td>
          </tr>
          <tr>
            <td className="border p-2">Camps with Attached Washroom</td>
            <td className="border p-2">₹1350/person</td>
          </tr>
          <tr>
            <td className="border p-2">Luxury Camping with Swimming Pool</td>
            <td className="border p-2">₹1500/person</td>
          </tr>
          <tr>
            <td className="border p-2">Ganga Beach Camping</td>
            <td className="border p-2">₹1200/person</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    question: 'What are the most popular camping sites in Rishikesh?',
    answer: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Camp Ganga Vatika:</strong> Rafting & Camping
        </li>
        <li>
          <strong>Luxury Camp Shivpuri</strong> near the river
        </li>
        <li>
          <strong>Ganga Beach Camp Shivpuri</strong>
        </li>
        <li>
          <strong>Luxury Camping with Swimming Pool</strong>
        </li>
        <li>
          <strong>Camp Ganga View Rishikesh</strong>
        </li>
      </ul>
    ),
  },
  {
    question: 'Which is the best season to do camping in Rishikesh?',
    answer: (
      <div>
        <p className="mb-2">
          Camping in Rishikesh is open year-round, except for riverside tents
          during monsoons.
        </p>
        <table className="w-full text-sm border border-collapse border-gray-300 mt-2">
          <thead>
            <tr className="bg-orange-100">
              <th className="border p-2 text-left">Camp Type</th>
              <th className="border p-2 text-left">Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Luxury Camps</td>
              <td className="border p-2">Open All Months</td>
            </tr>
            <tr>
              <td className="border p-2">Beach Camps</td>
              <td className="border p-2">October to May</td>
            </tr>
            <tr>
              <td className="border p-2">Normal Alpine Tents</td>
              <td className="border p-2">September to May</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    question: 'What should we carry for camping in Rishikesh?',
    answer: (
      <p>
        You should carry your booking confirmation message, valid ID proof for
        all members, personal toiletries, towel, soap, slippers, water bottles,
        sanitizer, and a torch.
      </p>
    ),
  },
  {
    question: 'How to book camping in Rishikesh?',
    answer: (
      <p>
        Simply fill out the online form or contact us via WhatsApp or Call. Our
        team will assist you with the booking process and send all necessary
        details.
      </p>
    ),
  },
  {
    question: 'Is camping safe in Rishikesh?',
    answer: (
      <p>
        Yes, our campsites prioritize hygiene and safety. Whether you choose
        attached or common washrooms, we ensure cleanliness and a secure
        environment.
      </p>
    ),
  },
  {
    question: 'Why choose RishikeshCamp.in for camping?',
    answer: (
      <p>
        We offer camps based on your needs, budget, and preferences. With us,
        you'll get hygienic food, a safe stay, and the best service — all at the
        lowest guaranteed price.
      </p>
    ),
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-[#333] font-sans">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              className="w-full text-left px-6 py-4 bg-white hover:bg-orange-50 transition flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-orange-600 text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              className={`px-6 py-4 bg-gray-50 text-sm transition-all duration-300 ${
                openIndex === index
                  ? 'max-h-[1000px] opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
