export const getLettersMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord), guessedLetterSet = new Set(guessedWord)
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}