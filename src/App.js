import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Header from "./components/Header/Header";
import characters from "./characters.json";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

// images
// import cosmic1 from '../..'

// const characters = [
//   { id: 1, name: 'Cosmic-1', image: cosmic1 },
//   { id: 2, name: 'Cosmic-2', image: cosmic2 },
//   { id: 3, name: 'Cosmic-3', image: cosmic3 },
// ]

// characters.image.map(character => (

const charactersRandom = arr => arr.sort(() => Math.random() - 0.5);

class App extends Component {
  //Setting the state 
  state = {
    characters,
    clicked: [],
    currentScore: 0,
    topScore: 0,
    headTitle: "Click an Image to Start!"
  };
  
// Set the cards to shuffle on click
  shuffleCards = id => {
    const newCharacters = charactersRandom(this.state.characters);

    const newScore = this.state.clicked.includes(id)
      ? 0
      : this.state.currentScore + 1;

    const clickedReset = newScore === 0
      ? []
      : [...this.state.clicked, id]

    const newTopScore = this.state.topScore < newScore
      ? newScore
      : this.state.topScore

    const newHeadTitle = newScore === 0
      ? "Guessed Incorrectly! Play Again!"
      : "You guessed Correctly! Keep Clicking!"

    this.setState({
      characters: newCharacters,
      clicked: clickedReset,
      currentScore: newScore,
      topScore: newTopScore,
      headTitle: newHeadTitle
    });
  }
  
  render() 
  {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          headTitle={this.state.headTitle}
        />
          <Header />
          <div className='container'>
            {this.state.characters.map(character => (
              <CharacterCard
                shuffleCards={this.shuffleCards}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
      </div>
    )
  }
};

export default App;