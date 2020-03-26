import React from 'react'
import { shallow } from 'enzyme'
import Congrats from './index.js'

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
} 


//es preferible tener un helper que haga el find con una funcion que reciba el attr que buscara pero 
// pero lo hago siempre para practicar

describe("<Congrats />", () => {
  test("Render without errors", () => {
    const congrats = setup()
    const component = congrats.find("[data-test='component-congrats']")
    expect(component.length).toBe(1)
  })
  
  
  test("render no text when `success` prop is false", () => {
    const congrats = setup({ success: false })
    const component = congrats.find("[data-test='component-congrats']")
    expect(component.text()).toBe("")
  })
  
  
  test("renders non-empty congrats message when `success` prop is true", () => {
    const congrats = setup({ success: true })
    const component = congrats.find("[data-test='component-congrats']")
    expect(component.text().length).not.toBe(0)
  })
})