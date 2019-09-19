import React from 'react';
import './App.css';
import Header from './components/header/index'
//import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';
import {books} from './components/book-list/data'

const style = { background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { books, style }
  }

  render() {
    const {books, style} = this.state
    return (
      <div className="App">
        <Header style={{ color: "#B4BFCD", background: "#160C59", padding: "40px" }} title="Books App" />

        <Header title="Search" />
        <div> Show Hebrew books
                  <input type="checkbox" onChange={() => {
            const filteredHebrew = books.filter((book: any) => { return book.language.toLowerCase() === "hebrew"})  
            const newStyle = { opacity: 0.2, background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}     
                
            this.setState({ books: filteredHebrew, style: newStyle })
            

          }} />
        </div>
        <div>
          <input placeholder="search by name" onChange={(e) => {
            const searchValue = e.target.value;
            const filteredData = books.filter((book: any) => { return book.title.toLowerCase().includes(searchValue) })
            this.setState({ books: filteredData })
          }} />
        </div>

     

        <BookList books={books} style={style} />

      </div>
    )
  }

}





export default App;
