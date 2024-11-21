// script.js

// Lista de livros (exemplo estático)
const books = [
    { title: "Matemática Básica", author: "Autor 1", cover: "book1.jpg" },
    { title: "História do Brasil", author: "Autor 2", cover: "book2.jpg" },
    { title: "Ciências Naturais", author: "Autor 3", cover: "book3.jpg" },
    { title: "Geografia", author: "Autor 4", cover: "book4.jpg" },
    // Adicione mais livros
  ];
  
  // Renderizar livros no catálogo
  function renderBooks() {
    const bookGrid = document.getElementById("book-grid");
    bookGrid.innerHTML = books
      .map(
        (book) => `
      <div class="book-card">
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>`
      )
      .join("");
  }
  
  // Buscar livros
  function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query)
    );
    const bookGrid = document.getElementById("book-grid");
    bookGrid.innerHTML = filteredBooks
      .map(
        (book) => `
      <div class="book-card">
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>`
      )
      .join("");
  }
  
  // Scroll para o catálogo
  function scrollToCatalog() {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  }
  
  // Inicializar a página
  document.addEventListener("DOMContentLoaded", renderBooks);