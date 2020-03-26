import { correctGuess, actionTypes } from './'
// import { TestScheduler } from 'jest'

describe("correctGuess", () => {
  // TestScheduler()
  test("Returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess()
    expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
  })
})