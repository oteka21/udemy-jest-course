import { getLettersMatchCount } from './index'

describe("getLettersMatchCount", () => {
  const secretWord = "party"
  test("returns correct count when are no matching letters", () =>{
    const letterMatchCount = getLettersMatchCount("bones", secretWord)
    expect(letterMatchCount).toBe(0)
  })


  test("returns the correct count where there are 3 matching letters", () => {
    const letterMatchCount = getLettersMatchCount("train", secretWord)
    expect(letterMatchCount).toBe(3)
  })

  test("returns the correct count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLettersMatchCount("parka", secretWord)
    expect(letterMatchCount).toBe(3)
  })
})