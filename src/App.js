import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super(); 

    this.state = {
      monsters : [],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters :users}));
  }

  handleChange = (e) => (                         // Arrow function avoids binding 'this' explicitly
    this.setState({searchField : e.target.value})
  )

  render(){
      // Desctructuring state
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    console.log(this.state.monsters);
    return(
      <div className='App'>
        <h1>Monsters Gallery</h1>
        <SearchBox
          placeholder='Search Monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    ); 
  } 
}

export default App;
