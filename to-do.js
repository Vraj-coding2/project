const inputButton = document.querySelector("#btn");
inputButton.addEventListener("click", () => {
  let inputField = document.querySelector(".input-text"); // Select input correctly
  let input = inputField.value; // Get input value

  if (input.trim() === "") return; // Prevent adding empty tasks

  let ol = document.querySelector(".todo-list"); // Select list
  let list = document.createElement("li");
  let button = document.createElement("button");
  button.textContent = "❌";
  button.classList.add("delete-btn"); // Create new list item
  list.textContent = input; // Set text
  list.classList.add("list-li");
  ol.appendChild(list);
  list.appendChild(button);
  // Append list item to the ordered list

  inputField.value = "";

  button.addEventListener("click", () => {
    list.remove();
  }); // Clear input field after adding
});
