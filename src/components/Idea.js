import React, { useState } from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { useTransition } from 'react-spring'
import axios from '../utils/axios'

const Section = styled.section`
  padding: 50px;
  background: #071e22;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #c4c5c5;
  text-align: center;
  display: none;
  width: 50%;

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

const Button = styled.button`
  padding: 12px 17px;
  font-size: 16px;
  font-weight: bold;
  display: block;
  border: none;
  border-radius: 4px;
  margin: auto;
  margin-top: 30px;
  background: #f9c170;
  color: #071e22;
`

const DialogContentStyled = styled(DialogContent)`
  background: #071e22;
  color: white;
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 4px;
`

const DialogOverlayStyled = styled(DialogOverlay)`
  background: rgba(255, 255, 255, 0.24);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`

const Label = styled.label`
  display: block;
  padding: 10px 0;
`
const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
`

export default ({ active, idea, IdeaCreator, id }) => {
  const [modal, setModal] = useState(false)
  const transitions = useTransition(modal, null, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -10 }
  })
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
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <DialogOverlayStyled key={key} style={props}>
                <DialogContentStyled
                  style={{
                    transform: `translate3d(0px, ${props.y}px, 0px)`
                  }}
                >
                  <h2>That is fucking awesome</h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="url">Where is the project hosted?</Label>
                      <Input
                        onChange={e => setUrl(e.target.value)}
                        value={url}
                        id="url"
                        type="url"
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter">
                        Where is your twitter handle?
                      </Label>
                      <Input
                        onChange={e => setTwitter(e.target.value)}
                        value={twitter}
                        id="twitter"
                      />
                    </div>
                    <Button type="submit">PUSH IT TO PROD</Button>
                  </form>
                  <Button type="button" onClick={() => setModal(false)}>
                    Close
                  </Button>
                  {submitted && <h2>YA THA BOMB</h2>}
                </DialogContentStyled>
              </DialogOverlayStyled>
            )
        )}
      </Section>
    </>
  )
}
