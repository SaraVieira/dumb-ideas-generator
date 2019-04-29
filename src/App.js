import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from './utils/axios'
import shuffleArray from './utils/shuffle'
import Idea from './components/Idea'
import Main from './components/Main'

const Footer = styled.h2`
  position: fixed;
  bottom: 0;
`

function App() {
  const [ideas, setIdeas] = useState([])
  const [activeIdea, setActiveIdea] = useState(0)

  const getData = async () => {
    const get = await axios.get()

    setIdeas(get.data.records.filter(idea => !idea.fields.created))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const handleKeypress = e => {
      var randomItem = Math.floor(Math.random() * ideas.length)
      if (e.code === 'Space') {
        setActiveIdea(randomItem)
      }
    }
    window.addEventListener('keydown', handleKeypress)
    return () => {
      window.removeEventListener('keydown', handleKeypress)
    }
  }, [ideas.length])

  return (
    <Main className="App">
      {ideas.length
        ? shuffleArray(ideas).map((idea, i) => (
            <Idea
              id={idea.id}
              key={idea.id}
              active={i === activeIdea}
              {...idea.fields}
            />
          ))
        : null}

      <Footer>Click Space to see more dumb ideas</Footer>
    </Main>
  )
}

export default App
