import React, { useEffect, useState } from 'react';

interface MemProps {
  mem: {
    value: string;
  } | null;
}

const Mem: React.FC<MemProps> = ({ mem }) => {
  return (
<div >
  {mem ? (
    <div className="bg-white p-4 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">{mem.value}</h2>
      <p className="text-gray-600">Chuck Norris approved!</p>
    </div>
  ) : (
    <p className="mt-4 text-gray-600">Loading...</p>
  )}
</div>
  );
};

export default Mem;
