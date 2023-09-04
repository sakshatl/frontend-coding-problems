const searchInput = document.getElementById("search-input");
const suggestionList = document.getElementById("suggestion-list");

searchInput.addEventListener("input", debounce(handleInput, 300));

function handleInput() {
  const query = searchInput.value.trim();

  if (query.length === 0) {
    suggestionList.style.display = "none";
    return;
  }

  // Simulate API call with fake data (replace with your data source)
  simulateAPICall(query).then((results) => {
    renderSuggestions(results);
  });
}

function renderSuggestions(results) {
  suggestionList.innerHTML = "";

  if (results.length === 0) {
    suggestionList.style.display = "none";
    return;
  }

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.textContent = result;
    suggestionList.appendChild(listItem);

    listItem.addEventListener("click", () => {
      searchInput.value = result;
      suggestionList.style.display = "none";
    });
  });

  suggestionList.style.display = "block";
}

function simulateAPICall(query) {
  // Replace with your fake data source or actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeResults = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Grapes",
        "Lemon",
        "Mango",
        "Orange",
        "Peach",
        "Pear",
        "Pineapple",
        "Strawberry",
      ];

      const filteredResults = fakeResults.filter((result) =>
        result.toLowerCase().includes(query.toLowerCase())
      );

      resolve(filteredResults);
    }, 500); // Simulate a delay to mimic API response time
  });
}

// Debounce function to limit the number of API calls
function debounce(func, wait) {
  let timeout;
  return function () {
    // const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      console.log('called')
      func(args);
      // func.apply(context, args);
    }, wait);
  };
}
