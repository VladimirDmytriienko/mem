"use client"

import MemComponent from "@/components/Mem";
import { useState } from 'react';

export default function MemPage() {
  const [memData, setMemData] = useState(null);

  const fetchMemData = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    setMemData(data);
  };

  return (
    <div className=" m-4 min-h-screen ">
      <div className="bg-gray-100 p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-500">Chuck Norris Joke Generator</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:shadow-outline-blue"
          onClick={fetchMemData}
        >
          Get a Joke
        </button>
        {memData ? (
          <MemComponent mem={memData} />
        ) : (
          <p className="mt-4 text-gray-600">Click the button to fetch a Chuck Norris joke!</p>
        )}
      </div>
    </div>




  );
}
