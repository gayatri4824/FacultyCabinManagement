import { useState, useEffect } from "react";
import axios from "axios";

const facultyBlocks = [
  { label: "Faculty Block 1", value: "ab1" },
  { label: "Faculty Block 2", value: "ab2" },
  { label: "Faculty Block 3", value: "ab3" },
];

const Calendar = () => {
  const [selectedBlock, setSelectedBlock] = useState("ab1"); // Default to "ab1"
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCabins(selectedBlock);
  }, [selectedBlock]);

  const fetchCabins = async (block) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/admin/cabins?block=${block}`);
      setCabins(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calendar-container">
      {/* Dropdown for block selection */}
      <div className="dropdowns">
        <select value={selectedBlock} onChange={(e) => setSelectedBlock(e.target.value)}>
          {facultyBlocks.map((block) => (
            <option key={block.value} value={block.value}>
              {block.label}
            </option>
          ))}
        </select>
      </div>

      {/* Loading/Error Handling */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <div className="calendar-grid">
          {cabins.map((cabin) => (
            <div
              key={cabin._id}
              className={`calendar-cell ${cabin.isOccupied ? "occupied" : "available"}`}
            >
              {cabin.number}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;

