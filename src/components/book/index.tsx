import React from 'react';




export default class Book extends React.Component<any, any> {

    render() {
        const { author, country, language, link, pages, title, year, image } = this.props
    return (
        <div style={{ background: "#B4BFCD", width: "25%" ,display: "inline-block", margin: "3%"}}>
            <h3>Title: {title}</h3>
            <img height="100" width="100" src={image}/>
            <div>Author: {author}</div>
            <div>Country: {country}</div>
            <div>Language: {language}</div>
            <a href={link}>Wikipedia page</a>
            <div>Pages: {pages}</div>
            <div>Year: {year}</div>
        </div>
    )
    }
}


