import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LogInFormContainer,
  FormContainer,
  LogInWebsiteLogo,
  InputContainer,
  LoginButton,
  UserNameInputField,
  PasswordInputField,
  InputLabel,
  ShowHideContainer,
  ErrorMessage,
  CheckBoxInput,
} from './styledComponents'

class LogInForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
    isCheckedPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onShowHidePassword = () => {
    this.setState(prev => ({isCheckedPassword: !prev.isCheckedPassword}))
  }

  renderPasswordField = () => {
    const {password, isCheckedPassword} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={isCheckedPassword ? 'text' : ' password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <ShowHideContainer>
          <CheckBoxInput
            type="checkbox"
            id="show-password"
            checked={isCheckedPassword}
            onChange={this.onShowHidePassword}
          />
        </ShowHideContainer>
      </>
    )
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username"> USERNAME</InputLabel>
        <UserNameInputInputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUserName}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LogInFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LogInWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUserNameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>*{errorMessage}</ErrorMessage>}
        </FormContainer>
      </LogInFormContainer>
    )
  }
}

export default LogInForm
