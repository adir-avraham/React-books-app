import React from "react";
import Book from "../book/index";


export default class BookList extends React.Component<any, any> {

    render() {
        const { books } = this.props
        return (
            <div>
                {books.map((book: any) => <Book key={book.title} {...book} /> )}
            </div>
        )
    }
}
