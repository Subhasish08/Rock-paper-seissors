import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.isDark};
`
export const Heading = styled.h1`
  font-size: 30px;
  text-align: center;
  background-color: ${props => props.isDark};
`
export const Desc = styled.p`
  font-size: 20px;
  text-align: center;
  background-color: ${props => props.isDark};
`
export const Image = styled.img`
  width: 250px;
  margin: 10px;
`
