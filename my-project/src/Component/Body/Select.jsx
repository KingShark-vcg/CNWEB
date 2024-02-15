// Your React component
import React, { useState } from "react";

const MultiSelectMenu = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionToggle = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, value]);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        {["Nhà sách Fahasa", "Bamboo Books", "Times Books", "VBooks"].map(
          (option) => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionToggle(option)}
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ps-1 p-2">{option}</span>
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default MultiSelectMenu;
