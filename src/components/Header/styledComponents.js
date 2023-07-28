import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor};

  @media screen and(max-width:768px) {
    flex-direction: column;
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const LogoutButton = styled.button`
font-family:"Roboto" ;
font-weight:bold ;
font-size:10px;
padding:80px 16px
color: "#ffffff"
border:none;
cursor:pointer;
border-radius:4px;
margin-left:14px;
outline:none ; 
background-color:" #3b82f6" ;`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vh;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  border-radius: 10px;
  background-color: ${props => props.background};
`
export const NavBarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`
export const NavBarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: '#cd5e1';
  border-radius: 10px;
  padding: 20px;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  padding: 13px;
  border: 1px solid grey;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`
export const IconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const confirmButton = styled.button`
  background-color: #3b82f6;
  align-self: flex-end;
  padding: 15px;

  padding-right: 20px;
  padding-left: 20px;
  color: white;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
