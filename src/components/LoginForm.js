import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  
  handleUsernameChange = (inputtedUsername) => {
    this.setState({username: inputtedUsername})
  }

  handlePasswordChange = (inputtedPassword) => {
    this.setState({password: inputtedPassword})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {
      username: this.state.username,
      password: this.state.password
    }
    if (formData.username !== "" && formData.password !== ""){
      this.props.handleLogin(formData)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              type="text" 
              name="username" 
              value={this.state.username}
              onChange={event => this.handleUsernameChange(event.target.value)}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={event => this.handlePasswordChange(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
