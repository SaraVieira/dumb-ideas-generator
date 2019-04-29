import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'
import Styles from './styles.js'
import App from './App'
import Done from './Done'

const Nav = styled.nav`
  height: 80px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;

  a {
    color: white;
    font-weight: bold;
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`

ReactDOM.render(
  <>
    <Styles />
    {/*    <Nav>
      <Link to="/">Home</Link> <Link to="done">Done Projects</Link>
    </Nav> */}
    <Router>
      <App path="/" />
      <Done path="/done" />
    </Router>
  </>,
  document.getElementById('root')
)
