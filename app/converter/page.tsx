"use client";
import { useState } from "react";

export default function ConverterPage() {
  const [input, setInput] = useState(1);
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [result, setResult] = useState<string | null>(null);

  const unitFactors: { [key: string]: number } = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    inch: 0.0254,
    foot: 0.3048,
  };

  const convertUnit = () => {
    if (fromUnit === toUnit) {
      setResult(input.toFixed(2));
      return;
    }
    const inMeters = input * unitFactors[fromUnit];
    const converted = inMeters / unitFactors[toUnit];
    setResult(converted.toFixed(4));
  };

  return (
    <section className="max-w-3xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">
        Unit Converter
      </h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          className="border p-3 rounded-md w-full shadow-sm"
          placeholder="Enter value"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border p-3 rounded-md w-full shadow-sm"
        >
          {Object.keys(unitFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <span className="flex items-center text-xl font-bold">→</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border p-3 rounded-md w-full shadow-sm"
        >
          {Object.keys(unitFactors).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="text-xl font-bold text-center">
        Result: {result ? `${result} ${toUnit}` : "Click to convert"}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={convertUnit}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Convert
        </button>
      </div>
    </section>
  );
}
