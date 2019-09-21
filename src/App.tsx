import React from 'react';
import './App.css';
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';
import Header from './components/header/index'
import Search from './/components/search'


//const newStyle = { opacity: 0.2, background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}     

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { 
      lang: "All",
      style : {background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"},
      searchValue: "",
      inHebrew: false,
      filteredBookList: booksWithImages, 
      fullBookList: booksWithImages,
       }
  }

  searchOperation = (searchText: string, inHebrew: boolean, lang: string): void => {

    const {fullBookList} = this.state;


    const filteredData = fullBookList.filter((book: any) => { 
    const isInHebrew = inHebrew ? book.language.toLowerCase() === "hebrew" : true
    const isLang = lang !== "All" ? book.language === lang : true 

    return book.title.toLowerCase().includes(searchText) && isInHebrew && isLang
   })
    
    this.setState({lang, filteredBookList: filteredData, searchValue: searchText, inHebrew })

  }

  render() {
    const {style, filteredBookList, searchValue, inHebrew, fullBookList } = this.state
    const searchProps = {lang: this.state.lang, languages: getLanguages(fullBookList), searchOperation: this.searchOperation, inHebrew, searchValue}
    
   
    
  // const listOflanguages = fullBookList.reduce((calc: any, currentValue: any)=>{ return
  //   { ...calc,[currentValue.language]: currentValue.language  }
  // },{})
  
  // console.log("list of lang=>" , listOflanguages)

    
    
    return (
      <div className="App">
        <Header style={{ color: "#B4BFCD", background: "#160C59", padding: "40px" }} title="Books App" />

        <Header title="Search" />
        <Search {...searchProps}/>

        

    
      
        <BookList books={filteredBookList} style={style} />

      </div>
    )
  }

}


function getLanguages(books: Array<any>) {
  return Object.keys(books.reduce((allCats, book: any) => {
    return { ...allCats, [book.language]: true }
  }, { "All": true }))
  
}


export default App;
