import React from "react"
import { BrowserRouter } from "react-router-dom"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import LocalBoardContainer from "./LocalBoardContainer"

describe("LocalBoardContainer", () => {
  it("should return true", () => {
    expect(true).toEqual(true)
  })
})
