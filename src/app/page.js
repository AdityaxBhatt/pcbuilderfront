"use client";
import { useState, useEffect } from "react";

export default function PcSelection() {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [cpuOptions, setCpuOptions] = useState([]);
  const [motherboardOptions, setMotherboardOptions] = useState([]);
  const [ramOptions, setRamOptions] = useState([]);

  useEffect(() => {
    fetchCompatibleComponents("cpu", setCpuOptions);
    fetchCompatibleComponents("motherboard", setMotherboardOptions);
    fetchCompatibleComponents("ram", setRamOptions);
  }, [selectedComponents]);

  const fetchCompatibleComponents = async (category, setOptions) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_B_API}/api/components/${category}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ selectedComponent: selectedComponents }),
        }
      );
      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
    }
  };

  const handleComponentChange = (event, category, attributes) => {
    const selectedId = Number(event.target.value);
    if (selectedId) {
      const selectedItem = attributes.find((item) => item.id === selectedId);
      setSelectedComponents((prev) => [
        ...prev.filter((comp) => comp.category !== category),
        { id: selectedItem.id, category, ...selectedItem },
      ]);
    } else {
      setSelectedComponents((prev) =>
        prev.filter((comp) => comp.category !== category)
      );
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Select Your PC Components</h1>

      {/* CPU Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">CPU:</label>
        <select
          onChange={(e) => handleComponentChange(e, "CPU", cpuOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select CPU</option>
          {cpuOptions.map((cpu) => (
            <option key={cpu.id} value={cpu.id}>
              {cpu.name}
            </option>
          ))}
        </select>
      </div>

      {/* Motherboard Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Motherboard:</label>
        <select
          onChange={(e) =>
            handleComponentChange(e, "Motherboard", motherboardOptions)
          }
          className="border p-2 w-full"
        >
          <option value="">Select Motherboard</option>
          {motherboardOptions.map((mb) => (
            <option key={mb.id} value={mb.id}>
              {mb.name}
            </option>
          ))}
        </select>
      </div>

      {/* RAM Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">RAM:</label>
        <select
          onChange={(e) => handleComponentChange(e, "RAM", ramOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select RAM</option>
          {ramOptions.map((ram) => (
            <option key={ram.id} value={ram.id}>
              {ram.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}