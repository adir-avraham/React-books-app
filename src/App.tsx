import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index'
import { books } from './data';
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';
import Book from './components/book';
import { format } from 'path';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header style={{ color: "#B4BFCD", background: "#160C59" , padding: "40px" }} title="Books App"/>

    
    </div>
  );
}

export default App;
