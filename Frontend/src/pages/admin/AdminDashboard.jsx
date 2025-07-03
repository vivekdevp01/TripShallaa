import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiUsers,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

import Layout from "../../components/layouts/AdminLayout";
import StatsCard from "../../components/admin/StatsCard";
import AdminList from "../../components/admin/AdminList";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalCamping: 0,
    totalRafting: 0,
    totalPlaces: 0,
    totalAdmins: 0,
    totalQueries: 0,
  });

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false); // Assuming you get this from token or backend

  useEffect(() => {
    fetchStats();
    fetchAdmins();
    checkIfSuperAdmin();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const [campingRes, raftingRes, placeRes, queryRes] = await Promise.all([
        axios.get("http://localhost:3050/api/v1/camping", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:3050/api/v1/rafting", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:3050/api/v1/place", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:3050/api/v1/query/search?phone=", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setStats((prev) => ({
        ...prev,
        totalCamping: campingRes.data.length || 0,
        totalRafting: raftingRes.data.length || 0,
        totalPlaces: placeRes.data.length || 0,
        totalQueries: queryRes.data.length || 0,
      }));
    } catch (err) {
      console.error("Stats error:", err);
    }
  };

  const fetchAdmins = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3050/api/v1/admin/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins(res.data?.data || []);
      setStats((prev) => ({ ...prev, totalAdmins: res.data.data.length }));
    } catch (err) {
      console.error("Admin fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const checkIfSuperAdmin = () => {
    // Basic role check from token or sessionStorage (replace with real logic)
    const role = localStorage.getItem("role");
    if (role === "superadmin") {
      setIsSuperAdmin(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3050/api/v1/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmins((prev) => prev.filter((a) => a._id !== id));
      setStats((prev) => ({ ...prev, totalAdmins: prev.totalAdmins - 1 }));
    } catch (err) {
      console.error("Error deleting admin:", err);
    }
  };

  return (
    <Layout active="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-semibold mb-6">
        <StatsCard
          title="Total Admins"
          count={stats.totalAdmins}
          icon={<HiUsers />}
        />
        <StatsCard
          title="Total Camping Bookings"
          count={stats.totalCamping}
          icon={<HiOutlineBriefcase />}
        />
        <StatsCard
          title="Total Rafting Bookings"
          count={stats.totalRafting}
          icon={<HiOutlineOfficeBuilding />}
        />
        <StatsCard
          title="Total Places"
          count={stats.totalPlaces}
          icon={<HiOutlineOfficeBuilding />}
        />
        <StatsCard
          title="Total Queries Received"
          count={stats.totalQueries}
          icon={<HiOutlineUserGroup />}
        />
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-xl font-bold mb-4">Admin List</h2>
        <AdminList admins={admins} onDelete={handleDelete} isSuperAdmin={isSuperAdmin} loading={loading} />
      </div>
    </Layout>
  );
}
