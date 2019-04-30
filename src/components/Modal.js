import React from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'
import Button from './Button'

const DialogContentStyled = styled(DialogContent)`
  background: ${props => props.theme.black};
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

export default ({
  setUrl,
  setTwitter,
  submitted,
  handleSubmit,
  url,
  twitter,
  setModal
}) => (
  <DialogOverlayStyled onClick={() => setModal(false)}>
    <DialogContentStyled>
      <h2>That is fucking awesome</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="url">Where is the project hosted?</Label>
          <Input
            required
            onChange={e => setUrl(e.target.value)}
            value={url}
            id="url"
            type="url"
          />
        </div>
        <div>
          <Label htmlFor="twitter">Where is your twitter handle?</Label>
          <Input
            required
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
      {submitted && <h2>You are amazing! Thank you so much!</h2>}
    </DialogContentStyled>
  </DialogOverlayStyled>
)
