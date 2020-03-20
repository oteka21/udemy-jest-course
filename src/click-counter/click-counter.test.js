import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'

/*
* 
*/

const setup = (props = {}, state= null) => {
  const wrapper = shallow(<Counter {...props}/>)
  if (state) wrapper.setState(state)
  return wrapper
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
    const initialStateCounter = wrapper.state('counter')
    expect(initialStateCounter).toBe(0)
  })

  test("Clicking button increment counter displays", () => {
    const counter = 7
    const wrapper = setup(wrapper, { counter })
    //find button and trigger event
    const button = findByTestArray(wrapper, "increment-button")
    button.simulate('click')
    //find counter display
    const counterDisplay = findByTestArray(wrapper, "counter-display")
    expect(counterDisplay.text()).toContain(counter + 1)
  })

  test("Clicking ddecrement counter dusplay", () => {
    const counter = 7
    const wrapper = setup(wrapper, {counter})
    const button = findByTestArray(wrapper, "decrement-button")
    button.simulate("click")
    const counterDisplay = findByTestArray(wrapper, "counter-display")
    expect(counterDisplay.text()).toContain(counter - 1)
  })
})