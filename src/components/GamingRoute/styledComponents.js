import styled from 'styled-components'
import Link from 'react-router-dom'

export const SearchVideosContainer = styled.div`
display:flex;
flex-direction:column;
background-color: ${props => props.bgColor}
padding: 30px
overflow-y:scroll;`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`
export const SearchInput = styled.input`
width:250px ; 
border:1px solid #64748b
border-radius:2px;
margin-left:60px;
padding:3px;
padding-right:10px;
padding-left:10px;`

export const ProductLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


@media screen and (min-width:768px) {
    width:70%;
}

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vh;
  background-color: ${props => props.bgColor};
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const Retry = styled.button`
  color: blue;
  padding: 15px;
`
