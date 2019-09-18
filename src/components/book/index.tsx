import React from 'react';




export default class Book extends React.Component<any, any> {

    render() {
        const { author, country, language, link, pages, title, year } = this.props
    return (
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h3>{country}</h3>
            <h3>{language}</h3>
            <h3>{link}</h3>
            <h3>{pages}</h3>
            <h3>{year}</h3>
        </div>
    )
    }
}


