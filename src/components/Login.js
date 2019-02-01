import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.state.valid = false;
        this.state.password = "";

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    handleChange(event){
        this.setState({password: event.target.value})
        this.changePassword();
    }

    handleLogin(){
        this.props.history.push('/list');
    }

    changePassword(){
        let myRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(myRegex.test(this.state.password)) this.state.valid = true;
    }

    render() {
        return (
            <div className="container-div">
                <div>Welcome</div>
                <div><input type="text" placeholder="Username"></input></div>
                <div><input onChange={this.handleChange} type="password" placeholder="Password"></input></div>
                <button onClick={this.state.valid ? this.handleLogin : null}>Login</button>
            </div>
        )
    }
}

export default LoginPage;