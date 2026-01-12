import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all enquiries
  const fetchEnquiries = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/enquiry");
      const data = await res.json();

      if (data.success) {
        setEnquiries(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete enquiry
  const deleteEnquiry = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/enquiry/${id}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (data.success) {
        alert("Deleted successfully");
        fetchEnquiries(); // refresh list
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Enquiries</h1>

      {loading ? (
        <p>Loading...</p>
      ) : enquiries.length === 0 ? (
        <p>No enquiries found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Phone</th>
                <th className="border px-3 py-2">City</th>
                <th className="border px-3 py-2">Message</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((item) => (
                <tr key={item._id}>
                  <td className="border px-3 py-2">{item.name}</td>
                  <td className="border px-3 py-2">{item.phone}</td>
                  <td className="border px-3 py-2">{item.city}</td>
                  <td className="border px-3 py-2">{item.message}</td>
                  <td className="border px-3 py-2">
                    <button
                      onClick={() => deleteEnquiry(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
