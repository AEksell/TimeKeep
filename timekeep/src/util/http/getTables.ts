export const getTables = async () => {
  try {
    const response = await fetch("https://localhost:7220/api/TimeTable");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch time tables");
      return [];
    }
  } catch (error) {
    console.error("Error fetching time tables:", error);
    return [];
  }
};
