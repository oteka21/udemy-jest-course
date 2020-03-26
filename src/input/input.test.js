import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, storeFactory } from '../testUtils'
import Input from './'


const setup = (state={}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<Input store={store} />).dive().dive()
  return wrapper
}

setup()

describe("render", () => {
  describe("word has not been guessed", () => {
    const initialState = { success: false }
    const wrapper = setup(initialState)
    test("render component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    })

    test("render input box" , ( )=> {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    })

    test("render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button")
      expect(submitButton.length).toBe(1)
    })
  })

  describe("word has been guessed", () => {
    const initialState = { success: true }
    const wrapper = setup(initialState)
    test("render component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    })

    test("does not render input box" , ( )=> {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    })

    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button")
      expect(submitButton.length).toBe(0)
    })
  })
})


describe("redux props", () => {
  const success = true
  const wrapper = setup({success})

  test("has success piece of state", () => {
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test("`guessedWord` is a function prop", () => {
    const guessWordAction = wrapper.instance().props.guessWord
    expect(guessWordAction).toBeInstanceOf(Function)
  })

})