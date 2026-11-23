const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  {
    id: 101,
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    genre: "Autobiography",
    publishedYear: 1999,
    available: true
  },
  {
    id: 102,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publishedYear: 1988,
    available: true
  },
  {
    id: 103,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishedYear: 1997,
    available: false
  }
];

// get all books
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

// filter by author
app.get("/api/books/filter", (req, res) => {
  const authorQuery = req.query.author;

  if (!authorQuery) {
    return res.status(400).json({ message: "Author query parameter is required" });
  }

  const result = books.filter(
    (b) => b.author.toLowerCase() === authorQuery.trim().toLowerCase()
  );

  res.status(200).json(result);
});

// get book by id
app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// add new book
app.post("/api/books", (req, res) => {
  const { title, author, genre, publishedYear, available } = req.body;

  if (
    !title || typeof title !== "string" ||
    !author || typeof author !== "string" ||
    !genre || typeof genre !== "string" ||
    typeof publishedYear !== "number" ||
    typeof available !== "boolean"
  ) {
    return res.status(400).json({ message: "Please provide valid book details" });
  }

  const nextId = books.length > 0 ? books[books.length - 1].id + 1 : 101;

  const newBook = {
    id: nextId,
    title: title.trim(),
    author: author.trim(),
    genre: genre.trim(),
    publishedYear,
    available
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// update book
app.put("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, genre, publishedYear, available } = req.body;

  if (
    !title || typeof title !== "string" ||
    !author || typeof author !== "string" ||
    !genre || typeof genre !== "string" ||
    typeof publishedYear !== "number" ||
    typeof available !== "boolean"
  ) {
    return res.status(400).json({ message: "Please provide valid book details" });
  }

  books[index] = {
    id,
    title: title.trim(),
    author: author.trim(),
    genre: genre.trim(),
    publishedYear,
    available
  };

  res.status(200).json(books[index]);
});

// delete book
app.delete("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});