"use client";

import { TimeTable } from "@/util/interfaces/TimeTable";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CreateTimeTable from "./CreateTimeTable";
import { getTables } from "@/util/http/getTables";

function TimeTableList() {
  const [timeTables, setTimeTables] = useState<TimeTable[]>([]);

  useEffect(() => {
    const fetchTimeTables = async () => {
      const tables = await getTables();
      setTimeTables(tables);
    };

    fetchTimeTables();
  }, []);

  return (
    <div className="max-w-[70rem] h-screen">
      <div className="flex flex-row gap-1 flex-wrap h-fit">
        <div className="w-40 text-center">
          <div className="border-2 border-primaryBlack px-12 py-10 cursor-pointer hover:bg-primaryElement">
            <CreateTimeTable />
          </div>
          <p className="text-center underline">Create New</p>
        </div>
        {timeTables.map((timeTable) => (
          <Link
            key={timeTable.id}
            href={`/TimeTables/${timeTable.id}`}
          >
            <div className="w-40 text-center border-2 border-primaryBlack px-12 py-10 cursor-pointer hover:bg-shadow">
              <h1 className="text-6xl">{timeTable.id || "Untitled"}</h1>
            </div>
            <p className="text-center">{timeTable.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TimeTableList;
