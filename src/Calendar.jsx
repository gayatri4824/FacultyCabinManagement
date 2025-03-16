import { useState } from "react";

const facultyBlocks = ["Faculty-Block 1", "Faculty-Block 2", "Faculty-Block 3"];

const Calendar = () => {
  const [selectedBlock, setSelectedBlock] = useState(facultyBlocks[0]);

  const handleBlockChange = (event) => {
    setSelectedBlock(event.target.value);
  };

  return (
    <div className="calendar-container">
      <div className="dropdowns">
        <select value={selectedBlock} onChange={handleBlockChange}>
          {facultyBlocks.map((block) => (
            <option key={block} value={block}>
              {block}
            </option>
          ))}
        </select>
      </div>

      <div className="calendar-grid">
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={`calendar-cell ${index % 7 === 0 ? "blue" : index % 5 === 0 ? "green" : ""}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;