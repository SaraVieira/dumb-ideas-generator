import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { Router, Link } from '@reach/router'
import Styles from './styles.js'
import Home from './Home'
import Logo from './components/Logo'
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

const theme = {
  black: '#071e22',
  white: '#f9c170'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Styles />
      <Nav>
        <Link to="/">Home</Link> <Link to="done">Done Projects</Link>
      </Nav>
      <Logo />
      <Router>
        <Home path="/" />
        <Done path="/done" />
      </Router>
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
