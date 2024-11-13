"use client";

import { postTable } from "@/util/http/postTable";
import React, { useState, useEffect } from "react";

function CreateTimeTable() {
  const [createdId, setCreatedId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleCreateTimeTable = async () => {
    setIsCreating(true);
    const id = await postTable();
    setIsCreating(false);

    if (id !== null) {
      setCreatedId(id);
    }
  };

  useEffect(() => {
    if (createdId !== null) {
      window.location.href = `/TimeTables/${createdId}`;
    }
  }, [createdId]);
  return (
    <div className="h-fit w-fit">
      {createdId === null ? (
        <div
          className={` ${isCreating ? "pointer-events-none opacity-50" : ""}`}
          onClick={handleCreateTimeTable}
        >
          <h1 className="text-6xl">&#x271A;</h1>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
}

export default CreateTimeTable;
