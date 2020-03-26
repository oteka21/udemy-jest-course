import { storeFactory } from './testUtils'
import { guessWord } from './actions'




describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'
  describe('no guessed words', () => {
    const initialState = { secretWord }
    let store
    beforeEach(() => {
      store  = storeFactory(initialState)
    }) 
    test('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const spectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMathCount: 3
          }
        ]
      }
      expect(newState).toEqual(spectedState)
    })

    test('update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const spectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMathCount: secretWord.length
          }
        ]
      }
      expect(newState).toEqual(spectedState)
    })
  })

  describe('some guessed words', () => {
    const guessedWords = [{guessedWord: 'agile', letterMathCount: 1}]
    const initialState = {guessedWords, secretWord}
    let store

    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const spectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulGuess,
            letterMathCount: 3
          }
        ]
      }
      expect(newState).toEqual(spectedState)
    })

    test('update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const spectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMathCount: secretWord.length
          }
        ]
      }
      expect(newState).toEqual(spectedState)
    })
  })
})