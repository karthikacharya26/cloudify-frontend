import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const Dashboard = () => {
  const [rows, setRows] = useState([{ label1: null, label2: [] }]);

  // Dummy data for Label 1 dropdown
  const label1Options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  // Dummy data for Label 2 dropdown
  const initialOptions2 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  // Track used options for Label 1
  const usedLabel1Options = rows.map((row) => row.label1?.value).filter(Boolean);

  // Add a new row
  const addRow = () => {
    setRows([...rows, { label1: null, label2: [] }]);
  };

  return (
    <div>
      <div className="p-6 shadow-md max-w-4xl mx-auto bg-white rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4">Label 1</th>
              <th className="border border-gray-300 p-4">Label 2</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Label 1: Single-select with filtered options */}
                <td className="border border-gray-300 p-8">
                  <Select
                    value={row.label1}
                    options={label1Options.filter(
                      (option) => !usedLabel1Options.includes(option.value)
                    )}
                    onChange={(selectedOption) => {
                      const updatedRows = [...rows];
                      updatedRows[rowIndex].label1 = selectedOption;
                      setRows(updatedRows);
                    }}
                    isClearable
                    placeholder="Select an option"
                  />
                </td>

                {/* Label 2: Multi-select */}
                <td className="border border-gray-300 p-8">
                  <CreatableSelect
                    value={row.label2}
                    isMulti
                    options={initialOptions2}
                    onChange={(selectedOptions) => {
                      const updatedRows = [...rows];
                      updatedRows[rowIndex].label2 = selectedOptions || [];
                      setRows(updatedRows);
                    }}
                    placeholder="Select options"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add Row Button */}
        <button
          onClick={addRow}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
