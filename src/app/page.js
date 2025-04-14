"use client";
import { useState, useEffect } from "react";

export default function PcSelection() {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [cpuOptions, setCpuOptions] = useState([]);
  const [motherboardOptions, setMotherboardOptions] = useState([]);
  const [ramOptions, setRamOptions] = useState([]);
  const [gpuOptions, setGpuOptions] = useState([]);
  const [storageOptions, setStorageOptions] = useState([]);
  const [psuOptions, setPsuOptions] = useState([]);
  const [coolingOptions, setCoolingOptions] = useState([]);

  useEffect(() => {
    fetchCompatibleComponents("cpu", setCpuOptions);
    fetchCompatibleComponents("motherboard", setMotherboardOptions);
    fetchCompatibleComponents("ram", setRamOptions);
    fetchCompatibleComponents("gpu", setGpuOptions);
    fetchCompatibleComponents("storage", setStorageOptions);
    fetchCompatibleComponents("psu", setPsuOptions);
    fetchCompatibleComponents("cooling", setCoolingOptions);
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
    <div className="p-4" style={{marginLeft:20}}>
      <h1 className="text-xl font-bold mb-4">Select Your PC Components</h1>

      {/* CPU Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">CPU:</label>
        <select style={{width:400}}
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
        <select style={{width:400}}
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
        <select style={{width:400}}
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

      {/* GPU Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">GPU:</label>
        <select style={{width:400}}
          onChange={(e) => handleComponentChange(e, "GPU", gpuOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select GPU</option>
          {gpuOptions.map((gpu) => (
            <option key={gpu.id} value={gpu.id}>
              {gpu.name}
            </option>
          ))}
        </select>
      </div>

      {/* Storage Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Stoage:</label>
        <select style={{width:400}}
          onChange={(e) => handleComponentChange(e, "Storage", storageOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select Stoage</option>
          {storageOptions.map((storage) => (
            <option key={storage.id} value={storage.id}>
              {storage.name}
            </option>
          ))}
        </select>
      </div>

      {/* PSU Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">PSU:</label>
        <select style={{width:400}}
          onChange={(e) => handleComponentChange(e, "PSU", psuOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select PSU</option>
          {psuOptions.map((psu) => (
            <option key={psu.id} value={psu.id}>
              {psu.name}
            </option>
          ))}
        </select>
      </div>

      {/* Cooling Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold">Cooling:</label>
        <select style={{width:400}}
          onChange={(e) => handleComponentChange(e, "Cooling", coolingOptions)}
          className="border p-2 w-full"
        >
          <option value="">Select Cooling</option>
          {coolingOptions.map((cooling) => (
            <option key={cooling.id} value={cooling.id}>
              {cooling.name}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}