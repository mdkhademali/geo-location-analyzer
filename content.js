window.addEventListener("message", function (event) {
  if (event.data.type === "SHOW_ON_MAP") {
    const location = event.data.location;
    // Popup HTML Open
    localStorage.setItem("location", location);
    alert(`Showing "${location}" on map!`);
  }
});