const list = document.querySelector(".list");

// add books
const addBook = e => {
  e.preventDefault();
  const value = document.forms["add-book"].querySelector("input").value;
  if (value === "") return;
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("button");

  bookName.textContent = value;
  deleteBtn.textContent = "Delete";

  li.classList.add("list__li");
  bookName.classList.add("list__name");
  deleteBtn.classList.add("btn");

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
};

document.forms["add-book"].addEventListener("submit", addBook);

// delete books;
list.addEventListener("click", e => {
  if (e.target.className === "btn") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// filter books
const books = [...list.getElementsByTagName("li")];
const searchBar = document.forms["search-book"].querySelector("input");
searchBar.addEventListener("keyup", e => {
  const term = e.target.value.toLowerCase();

  books.forEach(book => {
    const titles = book.firstElementChild.textContent;
    if (titles.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
