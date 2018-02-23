// src/App.test.js
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Title from './components/Title'
import Board from './containers/Board'

describe('<App />', () => {
  const app = shallow(<App />)
  const title = <Title content="Scoreboard" />
  const board = <Board players="{}" />

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(board)
  })
})
