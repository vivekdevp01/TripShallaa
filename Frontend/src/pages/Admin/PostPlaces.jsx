import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostPlaces() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    image: [""],
    latitude: "",
    longitude: "",
    category: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...formData.image];
    updatedImages[index] = value;
    setFormData({ ...formData, image: updatedImages });
  };

  const addImageField = () => {
    setFormData({ ...formData, image: [...formData.image, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/v1/places", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Place posted successfully!");
      setFormData({
        name: "",
        description: "",
        location: "",
        image: [""],
        latitude: "",
        longitude: "",
        category: "",
        isActive: true,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to post place.");
    }
  };

  return (
    <AdminLayout active="Post Places">
      <h2 className="text-2xl font-bold mb-6">Post a New Place</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
        <input type="text" name="name" placeholder="Place Name" value={formData.name} onChange={handleChange} required className="input" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="input" />
        
        <input type="text" name="category" placeholder="Category (e.g., Historical)" value={formData.category} onChange={handleChange} className="input" />
        <input type="text" name="latitude" placeholder="Latitude" value={formData.latitude} onChange={handleChange} className="input" />
        <input type="text" name="longitude" placeholder="Longitude" value={formData.longitude} onChange={handleChange} className="input" />
        
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="input col-span-2" rows="4" />

        <div className="col-span-2">
          <label className="font-semibold">Image URLs</label>
          {formData.image.map((url, idx) => (
            <input
              key={idx}
              type="url"
              placeholder={`Image URL ${idx + 1}`}
              value={url}
              onChange={(e) => handleImageChange(idx, e.target.value)}
              className="input mt-2"
              required
            />
          ))}
          <button type="button" onClick={addImageField} className="text-orange-600 mt-2 hover:underline">
            + Add Another Image
          </button>
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
