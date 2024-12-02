document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function () {
    const searchQuery = document.getElementById("searchInput").value;
    alert("Searching for: " + searchQuery);
  });
});
