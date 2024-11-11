'use client';
import { TimeTable } from '@/util/interfaces/TimeTable';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function TimeTableList() {
  const [timeTables, setTimeTables] = useState<TimeTable[]>([]);

  useEffect(() => {
    const fetchTimeTables = async () => {
      try {
        const response = await fetch('https://localhost:7071/api/TimeTables');
        if (response.ok) {
          const data = await response.json();
          setTimeTables(data); // Set time tables state with the fetched data
        } else {
          console.error('Failed to fetch time tables');
        }
      } catch (error) {
        console.error('Error fetching time tables:', error);
      }
    };

    fetchTimeTables();
  }, []);

  return (
    <div className='flex gap-4'>
      {timeTables.map((timeTable) => (
        <Link key={timeTable.id} href={`/TimeTables/${timeTable.id}`}>
          <div className='w-fit border-2 border-primaryBlack px-12 py-10 cursor-pointer transition delay-0 hover:bg-shadow'>
            <h1 className='text-6xl'>{timeTable.id || 'Untitled'}</h1>
          </div>
          <p className='text-center'>{timeTable.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default TimeTableList;
