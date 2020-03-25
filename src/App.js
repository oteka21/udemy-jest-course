import React, {Component} from "react";
import Congrats from './jotto/congrats'
import GuessedWords from './jotto/guessedWords'

class App extends Component {
  render() {
    return (<div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: "train", letterMathCount:  4}]} />
    </div>)
  }
}

export default App;