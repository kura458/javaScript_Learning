const library = [
  "The Hobbit",
  "1984",
  "Dune",
  "Fahrenheit 451",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Moby Dick",
  "Pride and Prejudice",
  "Frankenstein"
];

const searchBtn = document.getElementById("search");
const statusDisplay = document.getElementById("statusMessage");
const bookInput = document.getElementById("bookTitleInput");
const scanStatusDisplay = document.getElementById("scanStatus");

const findBook = (title) => {
  if (title === "") {
    throw new Error("Please enter a book title to search.");
  }

  const matchingBook = library.find(
    (book) => book.toLowerCase() === title.toLowerCase()
  );

  if (!matchingBook) {
    throw new Error(`"${title}" was not found in our library.`);
  }

  return `${matchingBook} is available to borrow!`;
};

searchBtn.addEventListener("click", () => {
  try {
    const result = findBook(bookInput.value.trim());

    statusDisplay.textContent = result;
    statusDisplay.className = "status-message success";

  } catch (err) {
    statusDisplay.textContent = err.message;
    statusDisplay.className = "status-message error";

    console.error(err);

  } finally {
    bookInput.value = "";
    scanStatusDisplay.textContent = "Library scan finished.";
  }
});

// Allow users to search by pressing Enter.
bookInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});