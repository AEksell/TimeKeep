'use client';
import { TimeTable } from '@/util/interfaces/TimeTable';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CreateTimeTable from './CreateTimeTable';

function TimeTableList() {
  const [timeTables, setTimeTables] = useState<TimeTable[]>([]);

  useEffect(() => {
    const fetchTimeTables = async () => {
      try {
        const response = await fetch('https://localhost:44372/api/TimeTable');
        if (response.ok) {
          const data = await response.json();
          setTimeTables(data);
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
    <div className='max-w-[70rem] h-screen'>
      <div className='flex flex-row gap-1 flex-wrap h-fit'>
        <div className='w-40 text-center'>
          <div className='border-2 border-primaryBlack bg-primaryElement px-12 py-10 cursor-pointer transition delay-0 hover:bg-shadow'>
            <CreateTimeTable />
          </div>
          <p className='text-center'>Create New</p>
        </div>
        {timeTables.map((timeTable) => (
          <Link key={timeTable.id} href={`/TimeTables/${timeTable.id}`}>
            <div className='w-40 text-center border-2 border-primaryBlack px-12 py-10 cursor-pointer transition delay-0 hover:bg-shadow'>
              <h1 className='text-6xl'>{timeTable.id || 'Untitled'}</h1>
            </div>
            <p className='text-center'>{timeTable.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TimeTableList;
