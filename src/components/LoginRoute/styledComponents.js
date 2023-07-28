import styled from 'styled-components'

export const LogInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1100px;
  margin: auto;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: column;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
  }
`
export const LogInWebsiteLogo = styled.img`
  width: 185px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  height: 40px;
  width: 100px;
  margin-top: 20px;
  margin-bottom: 2px;
  color: #0b69ff;
  border: none;
  outline: none;
  cursor: pointer;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64478b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64478b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  line-height: 16px;
  color: #ff0b37;
`

export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckBoxInput = styled.input`
  margin-right: 4px;
`
