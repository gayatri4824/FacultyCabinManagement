import { useState, useEffect } from "react";
import axios from "axios";

const Cabins = () => {
  const [cabinData, setCabinData] = useState({
    totalCabins: 0,
    availableCabins: 0,
    pendingRequests: 0,
    activeRequests: 0,
  });

  useEffect(() => {
    const fetchCabinStats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/cabins"); // Update with your actual backend URL
        const cabins = response.data;

        // Calculate statistics based on backend response format
        const totalCabins = cabins.length;
        const availableCabins = cabins.filter((cabin) => !cabin.isOccupied).length;
        const pendingRequests = cabins.filter((cabin) => cabin.status === "pending").length;
        const activeRequests = cabins.filter((cabin) => cabin.status === "active").length;

        setCabinData({ totalCabins, availableCabins, pendingRequests, activeRequests });
      } catch (error) {
        console.error("Error fetching cabin data:", error);
      }
    };

    fetchCabinStats();
  }, []);

  return (
    <div className="cabins">
      <div>
        <h2>Total Cabins</h2>
        <h4>{cabinData.totalCabins}</h4>
      </div>
      <div>
        <h2>Available Cabins</h2>
        <h4>{cabinData.availableCabins}</h4>
      </div>
      <div>
        <h2>Pending Requests</h2>
        <h4>{cabinData.pendingRequests}</h4>
      </div>
      <div>
        <h2>Active Requests</h2>
        <h4>{cabinData.activeRequests}</h4>
      </div>
    </div>
  );
};

export default Cabins;
