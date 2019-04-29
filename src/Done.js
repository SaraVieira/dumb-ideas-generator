import React, { useEffect, useState } from 'react'
import axios from './utils/axios'
import shuffleArray from './utils/shuffle'
import Main from './components/Main'

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
