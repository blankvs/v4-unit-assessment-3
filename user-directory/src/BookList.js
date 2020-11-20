import React, {Component} from 'react'

export default class BookList extends Component{
    constructor(){
        super()


        this.state = {

        }
    }   

    render(){
        const mappedBooks = this.state.books.map((element, index) => {
            return <div className="BookElement">{element.books.img}</div>
        })
        return(
            <div className="BooksImage">
                <p className="listInBookList">list:{this.props.books}</p>
                {mappedBooks[this.state.index]}
            </div>
        )
    }
}