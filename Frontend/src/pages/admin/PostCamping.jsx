import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../../components/layouts/AdminLayout";

export default function PostCamping() {
  const [formData, setFormData] = useState({
    code: "",
    title: "",
    description: "",
    location: "",
    pricePerNight: "",
    services: "",
    images: [],
  });

  const [preview, setPreview] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "images") {
      const files = Array.from(e.target.files);
      setFormData({ ...formData, images: files });
      setPreview(files.map((file) => URL.createObjectURL(file)));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const data = new FormData();

      data.append("code", formData.code);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("location", formData.location);
      data.append("pricePerNight", formData.pricePerNight);
      formData.services.split(",").forEach((s) => data.append("services", s.trim()));
      formData.images.forEach((file) => data.append("images", file));

      await axios.post("http://localhost:3050/api/v1/camping", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Camping trip posted successfully!");
      setFormData({
        code: "",
        title: "",
        description: "",
        location: "",
        pricePerNight: "",
        services: "",
        images: [],
      });
      setPreview([]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to post camping");
    }
  };

  return (
    <Layout active="Post Camping">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6">
          Post a New Camping Trip
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Section 1: Basic Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Basic Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <input type="text" name="code" placeholder="Unique Camp Code" value={formData.code} onChange={handleChange} className="input" required />
              <input type="text" name="title" placeholder="Camp Title" value={formData.title} onChange={handleChange} className="input" required />
              <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="input" required />
            </div>
          </div>

          {/* Section 2: Location & Pricing */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Location & Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="input" required />
              <input type="number" name="pricePerNight" placeholder="Price per Night (₹)" value={formData.pricePerNight} onChange={handleChange} className="input" required />
            </div>
          </div>

          {/* Section 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Included Services</h3>
            <input type="text" name="services" placeholder="Services (comma-separated)" value={formData.services} onChange={handleChange} className="input" />
            <p className="text-sm text-gray-500 mt-1">e.g., Bonfire, Tents, Meals, Toilets</p>
          </div>

          {/* Section 4: Images */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Upload Images</h3>
            <input type="file" name="images" accept="image/*" multiple onChange={handleChange} className="input" required />
            <div className="flex gap-2 flex-wrap mt-2">
              {preview.map((img, i) => (
                <img key={i} src={img} alt="preview" className="w-20 h-20 object-cover rounded" />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Post Camping
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
