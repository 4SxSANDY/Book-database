// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const handleChange=()=>{
    navigate('/addbookform')
  }
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button onClick={handleChange}>Add book</button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
