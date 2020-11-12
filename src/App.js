import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'


export class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {profileObj: ""};
  }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    this.setState({profileObj: response.profileObj});
  }

  render(){

    var welcome

    if(this.state.profileObj) {
      welcome = (
        <div>
          <p>Welcome, {this.state.profileObj.name}</p>
          <p>Email: {this.state.profileObj.email}</p>
          <img src={this.state.profileObj.imageUrl} />      
        </div>
      )
    }

    return(
      <div>
        <GoogleLogin
            clientId= "--insert-google-client-id-here--"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        
        <br />
        <br />

        {welcome}

      </div>
    )
  }

}

export default App;
