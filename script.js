document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input[type='search']");
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      alert(`Searching for: ${searchInput.value}`);
    }
  });
});
