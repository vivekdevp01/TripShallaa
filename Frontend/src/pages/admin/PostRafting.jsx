import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostRafting() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    pricePerPerson: "",
    durationInKm: "",
    durationInHours: "",
    description: "",
    highlights: [""],
    includes: [""],
    whatToExpect: [""],
    meetingPoint: "",
    pickupDetails: "",
    cancellationPolicy: "Non-refundable",
    image: [""],
    availableDates: [""],
    rating: 0,
    tags: [""],
    groupDiscountAvailable: false,
    minimumAge: "",
    isPopular: false,
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleArrayChange = (name, index, value) => {
    const updated = [...formData[name]];
    updated[index] = value;
    setFormData({ ...formData, [name]: updated });
  };

  const addField = (name) => {
    setFormData({ ...formData, [name]: [...formData[name], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cleanedData = {
        ...formData,
        pricePerPerson: Number(formData.pricePerPerson),
        durationInKm: Number(formData.durationInKm),
        durationInHours: Number(formData.durationInHours),
        rating: Number(formData.rating),
        minimumAge: Number(formData.minimumAge),
        availableDates: formData.availableDates.map((d) => new Date(d)),
      };

      await axios.post("http://localhost:3001/api/v1/rafting", cleanedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Rafting trip posted successfully!");
      setFormData({
        title: "",
        location: "",
        pricePerPerson: "",
        durationInKm: "",
        durationInHours: "",
        description: "",
        highlights: [""],
        includes: [""],
        whatToExpect: [""],
        meetingPoint: "",
        pickupDetails: "",
        cancellationPolicy: "Non-refundable",
        image: [""],
        availableDates: [""],
        rating: 0,
        tags: [""],
        groupDiscountAvailable: false,
        minimumAge: "",
        isPopular: false,
        isActive: true,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to post rafting trip.");
    }
  };

  const renderArrayInputs = (name, label) => (
    <div className="col-span-2">
      <label className="font-semibold">{label}</label>
      {formData[name].map((val, idx) => (
        <input
          key={idx}
          type="text"
          value={val}
          onChange={(e) => handleArrayChange(name, idx, e.target.value)}
          className="input mt-2"
          required
        />
      ))}
      <button type="button" onClick={() => addField(name)} className="text-orange-600 hover:underline mt-1">
        + Add Another
      </button>
    </div>
  );

  return (
    <AdminLayout active="Post Rafting">
      <h2 className="text-2xl font-bold mb-6">Post a Rafting Trip</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="input" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="input" />
        <input type="number" name="pricePerPerson" placeholder="Price per Person" value={formData.pricePerPerson} onChange={handleChange} required className="input" />
        <input type="number" name="durationInKm" placeholder="Distance (Km)" value={formData.durationInKm} onChange={handleChange} required className="input" />
        <input type="number" name="durationInHours" placeholder="Duration (Hours)" value={formData.durationInHours} onChange={handleChange} required className="input" />
        <input type="number" name="minimumAge" placeholder="Minimum Age" value={formData.minimumAge} onChange={handleChange} required className="input" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required rows="4" className="input col-span-2" />

        {renderArrayInputs("highlights", "Highlights")}
        {renderArrayInputs("includes", "Includes")}
        {renderArrayInputs("whatToExpect", "What to Expect")}
        {renderArrayInputs("image", "Image URLs")}
        {renderArrayInputs("availableDates", "Available Dates (YYYY-MM-DD)")}
        {renderArrayInputs("tags", "Tags")}

        <input type="text" name="meetingPoint" placeholder="Meeting Point" value={formData.meetingPoint} onChange={handleChange} required className="input" />
        <input type="text" name="pickupDetails" placeholder="Pickup Details" value={formData.pickupDetails} onChange={handleChange} className="input" />
        <input type="text" name="cancellationPolicy" placeholder="Cancellation Policy" value={formData.cancellationPolicy} onChange={handleChange} className="input" />

        <div className="flex items-center gap-2 mt-2">
          <label className="font-semibold">Group Discount Available</label>
          <input type="checkbox" name="groupDiscountAvailable" checked={formData.groupDiscountAvailable} onChange={handleChange} />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <label className="font-semibold">Popular</label>
          <input type="checkbox" name="isPopular" checked={formData.isPopular} onChange={handleChange} />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <label className="font-semibold">Active</label>
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
        </div>

        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded mt-4 col-span-2 hover:bg-orange-700">
          Submit
        </button>
      </form>
    </AdminLayout>
  );
}
