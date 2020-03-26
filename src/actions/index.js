import { getLettersMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
}


export function correctGuess(){
  return {
    type: actionTypes.CORRECT_GUESS
  }
}

export function guessWord(guessedWord){
  return function (dispatch, getState){
    const { secretWord } = getState()
    const letterMathCount = getLettersMatchCount(guessedWord, secretWord)
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMathCount
      }
    })

    if(secretWord === guessedWord){
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      })
    }
  }
}