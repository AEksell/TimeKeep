export const postTable = async (): Promise<number | null> => {
  try {
    const response = await fetch("https://localhost:7220/api/TimeTable", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "New TimeTable" }),
    });

    if (!response.ok) {
      console.error("Failed To Create TimeTable");
      return null;
    }

    const data = await response.json();
    console.log("Response data:", data);

    return data.value.id;
  } catch (error) {
    console.error("Error creating timeTable:", error);
    return null;
  }
};
