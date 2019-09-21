import React from 'react';
import './App.css';
import Header from './components/header/index'
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';



//const newStyle = { opacity: 0.2, background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}     

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { 
      style : {background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"},
      searchValue: "",
      inHebrew: false,
      filteredBookList: booksWithImages, 
      fullBookList: booksWithImages,
       }
  }

  searchOperation(searchText: string, inHebrew: boolean): void {

    const {fullBookList} = this.state;
    console.log(searchText, inHebrew)

    const filteredData = fullBookList.filter((book: any) => { 
    const isInHebrew = inHebrew ? book.language.toLowerCase() === "hebrew" : true
    return book.title.toLowerCase().includes(searchText) && isInHebrew
   })
    
    this.setState({ filteredBookList: filteredData, searchValue: searchText, inHebrew })

  }

  render() {
    const {style, filteredBookList } = this.state
    return (
      <div className="App">
        <Header style={{ color: "#B4BFCD", background: "#160C59", padding: "40px" }} title="Books App" />

        <Header title="Search" />
        <div> Show Hebrew books
                  <input type="checkbox" onChange={(e) => {
                  const inHebrew = e.target.checked;
                     const {searchValue} = this.state; 
                  this.searchOperation(searchValue, inHebrew) 
          }} />

        </div>
        <div>
          <input placeholder="search by name" value={this.state.searchValue} onChange={(e) => {
            const searchValue = e.target.value;
            const { inHebrew } = this.state;
            this.searchOperation(searchValue, inHebrew)
          }} />
        </div>

     

        <BookList books={filteredBookList} style={style} />

      </div>
    )
  }

}





export default App;
