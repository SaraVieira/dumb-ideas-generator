import styled from 'styled-components'
const Button = styled.button`
  padding: 12px 17px;
  font-size: 16px;
  font-weight: bold;
  display: block;
  border: none;
  border-radius: 4px;
  margin: auto;
  margin-top: 30px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`

export default Button
