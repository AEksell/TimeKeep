'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { TimeTable } from '@/util/interfaces/TimeTable';

const TimeTablePage = () => {
  const { id } = useParams();
  const [timeTable, setTimeTable] = useState<TimeTable | null>(null);

  useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const response = await fetch(
          `http://localhost:5044/api/TimeTables/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setTimeTable(data);
        }
      } catch (error) {
        console.error('Error fetching timeTable:', error);
      }
    };

    if (id) {
      fetchTimeTable();
    }
  }, [id]);

  return (
    <div>
      {timeTable ? <h1>Title: {timeTable.title}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default TimeTablePage;
