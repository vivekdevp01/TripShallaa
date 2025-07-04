import { useState } from 'react'

export default function QueryForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch('https://your-backend-url.com/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (err) {
      console.error('❌ Failed to send query', err)
    }

    const message = `Hi Tripshalla! My name is ${form.name}, my email is ${form.email}, and my number is ${form.phone}. My query is: ${form.query}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/918218007147?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="max-w-md mx-auto p-8 rounded-3xl shadow-xl bg-gradient-to-br from-white to-orange-100 text-[#2d2d2d]">
      <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">
        Contact Tripshalla
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          required
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          required
        />
        <textarea
          name="query"
          value={form.query}
          onChange={handleChange}
          placeholder="Your Query"
          className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-semibold text-lg rounded-2xl shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Submit Query
        </button>
      </form>
    </div>
  )
}
