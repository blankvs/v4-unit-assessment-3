import React, {Component} from 'react'
import './App.css';
import Header from './Header'
import BookList from './BookList'
import Shelf from './Shelf'
import data from './data'


export default class App extends Component {
    constructor(prop){
      super()

      this.state = {
        books: data
      }
    }
  
    render(){
      return(
        <div className="App">
          <Header/>
          <BookList myBooks={this.state.books}/>
          <Shelf/>
        </div>
      )
    }
}

