import React from 'react';
import './App.css';
import Header from './components/header/index'
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';


const style = { background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { booksWithImages, style }
  }

  render() {
    const {booksWithImages, style} = this.state
    return (
      <div className="App">
        <Header style={{ color: "#B4BFCD", background: "#160C59", padding: "40px" }} title="Books App" />

        <Header title="Search" />
        <div> Show Hebrew books
                  <input type="checkbox" onChange={() => {
            const filteredHebrew = booksWithImages.filter((book: any) => { return book.language.toLowerCase() === "hebrew"})  
            const newStyle = { opacity: 0.2, background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}     
                
            this.setState({ booksWithImages: filteredHebrew, style: newStyle })
            

          }} />
        </div>
        <div>
          <input placeholder="search by name" onChange={(e) => {
            const searchValue = e.target.value;
            const filteredData = booksWithImages.filter((book: any) => { return book.title.toLowerCase().includes(searchValue) })
            this.setState({ booksWithImages: filteredData })
          }} />
        </div>

     

        <BookList books={booksWithImages} style={style} />

      </div>
    )
  }

}





export default App;
