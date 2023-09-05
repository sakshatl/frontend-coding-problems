// Create a cache object to store the fetched data
const cache = new Map();

// Function to make a cached API request
async function getCachedData(url) {
  // Check if the data is already in the cache
  if (cache.has(url)) {
    console.log("Data retrieved from cache:", url);
    return cache.get(url);
  }

  // If not in cache, fetch the data from the API
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Store the fetched data in the cache
    cache.set(url, data);

    console.log("Data fetched and cached:", url);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Example usage
async function fetchData() {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; // Replace with your API endpoint
    const data = await getCachedData(apiUrl);
    console.log("Received data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fetch data multiple times (the second time will retrieve from cache)
fetchData();
fetchData();
