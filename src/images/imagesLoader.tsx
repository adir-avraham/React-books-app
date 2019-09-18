import {books} from "../data";







function importAll(r:any) {
    return r.keys().map(r);
}

export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));


export const booksWithImages = books.map((book, index) => { return { ...book, image: images[index] } })
