import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
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

  render(){
      // Desctructuring state
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    console.log(this.state.monsters);
    return(
      <div className='App'>
        <input 
        type='search' 
        placeholder='Search Monster'
        onChange={e => this.setState({searchField : e.target.value})}></input>
        <CardList monsters={filteredMonsters} />
      </div>
    ); 
  } 
}

export default App;
