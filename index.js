function addingEventListener() {
  const button = document.getElementById("button"); // get the input by its id
  button.addEventListener("click", () => {
    alert("Button was clicked!"); // or console.log("clicked")
  });
}
