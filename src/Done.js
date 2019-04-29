import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from './utils/axios'
import shuffleArray from './utils/shuffle'

const Main = styled.ul`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  const [ideas, setIdeas] = useState([])

  const getData = async () => {
    const get = await axios.get()

    setIdeas(get.data.records.filter(idea => idea.fields.created))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Main className="App">
      {ideas.length
        ? shuffleArray(ideas).map((idea, i) => <li>{idea.fields.Link}</li>)
        : null}
    </Main>
  )
}

export default App
