import React, { useState } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import Modal from './Modal'
import axios from '../utils/axios'
import Button from './Button'

const Section = styled.section`
  padding: 50px;
  background: ${props => props.theme.black};
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #c4c5c5;
  text-align: center;
  display: none;
  width: 50%;
  text-transform: capitalize;

  ${is('active')`
    display: block;
  `}

  a {
    color: #f4c095;
    text-decoration: none;
    position: relative;
    padding-bottom: 10px;
    transition: all 200ms ease;
    display: inline-block;

    &:hover {
      padding-bottom: 5px;
      transform: translateY(-5px);
    }

    &:after {
      content: '';
      border-bottom: 2px solid #f4c095;
      width: 100%;
      height: 2px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`

export default ({ active, idea, IdeaCreator, id }) => {
  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState('')
  const [twitter, setTwitter] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.patch(`/${id}`, {
      fields: {
        created: true,
        Link: url,
        creatorTwitterHandle: twitter
      }
    })

    setSubmitted(true)
    setTimeout(() => {
      setModal(false)
    }, 300)
  }

  return (
    <>
      <Section active={active}>
        <h2>{idea}</h2>
        <a
          href={`https://twitter.com/@${IdeaCreator}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{IdeaCreator}
        </a>
        <Button onClick={() => setModal(true)}>I made dis</Button>
        {modal && (
          <Modal
            setModal={setModal}
            setUrl={setUrl}
            setTwitter={setTwitter}
            submitted={submitted}
            url={url}
            twitter={twitter}
            handleSubmit={handleSubmit}
          />
        )}
      </Section>
    </>
  )
}
