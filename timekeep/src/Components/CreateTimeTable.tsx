'use client';

import React, { useState, useEffect } from 'react';

function CreateTimeTable() {
  const [createdId, setCreatedId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const createNewTimeTable = async () => {
    setIsCreating(true);
    try {
      const response = await fetch('https://localhost:7071/api/TimeTables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'New TimeTable' }),
      });

      const data = await response.json();

      if (response.ok) {
        setCreatedId(data.id);
      } else {
        console.error('Failed To Create TimeTable', data);
      }
    } catch (error) {
      console.error('Error creating timeTable:', error);
    } finally {
      setIsCreating(false);
    }
  };

  useEffect(() => {
    if (createdId !== null) {
      window.location.href = `/TimeTables/${createdId}`;
    }
  }, [createdId]);

  return (
    <div className='h-fit w-fit grid'>
      {createdId === null ? (
        <div
          className={`w-fit border-2 border-primaryBlack px-12 py-10 cursor-pointer transition delay-0 hover:bg-shadow ${
            isCreating ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={createNewTimeTable}
        >
          <h1 className='text-6xl'>&#x271A;</h1>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
      <p>Create New TimeTable!</p>
    </div>
  );
}

export default CreateTimeTable;
