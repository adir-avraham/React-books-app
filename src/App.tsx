import React from 'react';
import './App.css';
import Header from './components/header/index'
import { books } from './components/book-list/data';
import { booksWithImages } from './images/imagesLoader';
import BookList from './components/book-list';
import Book from './components/book';
import { format } from 'path';


class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    this.state = { books, booksWithImages }
  }

  render() {

    return (
   <div className="App">
     <Header style={{ color: "#B4BFCD", background: "#160C59" , padding: "40px" }} title="Books App"/>
     
      <BookList books={this.state.booksWithImages}/>
   </div>
    )
  }

}







// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Header style={{ color: "#B4BFCD", background: "#160C59" , padding: "40px" }} title="Books App"/>

    
//     </div>
//   );
// }

export default App;
