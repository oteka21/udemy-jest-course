import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../testUtils'
import GuessedWords from './index'

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMathCount: 3  }
  ]
}


const setup = (props = {}) => {
  const mixedProps = {...defaultProps, ...props}
  return shallow(<GuessedWords {...mixedProps}/>)
}

test("Does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps)
})

describe("If there are no words guessed", () => {
  const wrapper = setup({guessedWords: []})

  test("Render without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })

  test("Renders instructions for guess a word", () => {
    const component = findByTestAttr(wrapper, "guess-instructions")
    expect(component.text().length).not.toBe(0)
  })
})

describe("If there are words guessed", () => {
  const guessedWords = [
    {guessedWord: "train", letterMathCount: 3},
    {guessedWord: "Dog", letterMathCount: 1},
    {guessedWord: "subway", letterMathCount: 4}
  ]

  const wrapper = setup({guessedWords})

  test("Renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })


  test("Render \"Guessed words container\"", () => {
    const guessedWordsContainer = findByTestAttr(wrapper, "guessed-words")
    expect(guessedWordsContainer.length).toBe(1)
  })


  test("Render each guessed wprd", () => {
    const guessedWordArray = findByTestAttr(wrapper, "guessed-word")
    expect(guessedWordArray.length).toBe(guessedWords.length)
  })
})