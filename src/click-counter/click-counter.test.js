import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'

/*
* 
*/

const setup = (props = {}, state= null) => {
  return shallow(<Counter {...props}/>)
}

const findByTestArray = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
} 

describe("Test for Counter", () => {
  const wrapper = setup()

  test("Render without error", () => {
    const counterComponent = findByTestArray(wrapper, "component-counter")
    expect(counterComponent.length).toBe(1)
  })

  test("Renders increment button", () => {
    const counterComponent = findByTestArray(wrapper, "increment-button")
    expect(counterComponent.length).toBe(1)
  })

  test("Renders Counter display", () => {
    const counterComponent = findByTestArray(wrapper, "counter-display")
    expect(counterComponent.length).toBe(1)
  })

  test("Counter start at 0", () => {
  })

  test("Clicking button increment counter displays", () => {
  })
})