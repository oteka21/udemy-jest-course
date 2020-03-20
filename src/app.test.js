import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe("Test app mount", () => {
  test("Test app title", () => {
    const app = mount(<App />)
    expect(app.find(".title").text()).toEqual("Hola mundo!")
  })
})