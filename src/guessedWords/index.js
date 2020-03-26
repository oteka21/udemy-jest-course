import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
  let contents
  if(props.guessedWords.length === 0){
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  }else{
    const guessedWordRow = props.guessedWords.map((word,index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMathCount}</td>
      </tr>
    ))

    contents = (
      <div data-test="guessed-words">
        <table className="table table-sm">
          <thead className="thead-light">
            <tr><th>Guess</th><th>Matching letters</th></tr>
            <tbody>
              { guessedWordRow }
            </tbody>
          </thead>
        </table>
      </div>
    )
  }
  return (<div data-test="component-guessed-words">
    {contents}
  </div>)
}


GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    guessedWord: PropTypes.string.isrequired,
    letterMathCount: PropTypes.number.isRequired

  })).isRequired
}

export default GuessedWords