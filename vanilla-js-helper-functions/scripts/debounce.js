// DEBOUNCE EXAMPLE

(function () {
  const debounceInput = document.querySelector("#debounce-input");
  const normalInput = document.querySelector("#normal-input");

  const handleDebounceInput = (e) => {
    const value = e.target.value;
    if (value) {
      console.log(`DEBOUNCED - ${value}`);
    }
  };

  const handleNormalInput = (e) => {
    const value = e.target.value;
    if (value) {
      console.log(`NORMAL - ${value}`);
    }
  };

  // debounce function
  const debounce = (callbackFunc, delay = 200) => {
    let timeout;

    return (...args) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => callbackFunc(...args), delay);
    };
  };

  debounceInput.addEventListener("input", debounce(handleDebounceInput, 200));
  normalInput.addEventListener("input", handleNormalInput);
})();
