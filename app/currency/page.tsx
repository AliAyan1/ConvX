"use client";
import { useState, useEffect } from "react";

const currencyList = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "INR", name: "Indian Rupee" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "ZAR", name: "South African Rand" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "DKK", name: "Danish Krone" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "KRW", name: "South Korean Won" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "EGP", name: "Egyptian Pound" },
];

export default function CurrencyPage() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [converted, setConverted] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const convertCurrency = async () => {
    if (from === to) {
      setConverted(amount.toFixed(2));
      setErrorMsg(null);
      return;
    }
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();
      if (data.rates[to]) {
        setConverted(data.rates[to].toFixed(2));
        setErrorMsg(null);
      } else {
        setConverted(null);
        setErrorMsg("Conversion not available for selected currencies.");
      }
    } catch (error) {
      console.error("Conversion failed", error);
      setConverted(null);
      setErrorMsg("API error occurred. Try again later.");
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, from, to]);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Currency Exchange</h2>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded w-full md:w-1/4"
          placeholder="Amount"
        />

        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          {currencyList.map((cur) => (
            <option key={cur.code} value={cur.code}>
              {cur.code} - {cur.name}
            </option>
          ))}
        </select>

        <span className="text-xl">→</span>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          {currencyList.map((cur) => (
            <option key={cur.code} value={cur.code}>
              {cur.code} - {cur.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 text-xl font-semibold text-center">
        {converted && !errorMsg && (
          <span>
            {amount} {from} = <span className="text-green-600">{converted} {to}</span>
          </span>
        )}
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      </div>
    </section>
  );
}
