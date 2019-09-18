import React from "react";
import Book from "../book/index";


export default class BookList extends React.Component<any, any> {

    render() {
        const { books } = this.props
        books.sort(function(a:any, b:any) { return b.year - a.year;});
        return (
            <div>
                {books.map((book: any) => <Book key={book.title} {...book} /> )}
            </div>
        )
    }
}
