import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div>Welcome</div>
                <div><input type="text" placeholder="Username"></input></div>
                <div><input type="password" placeholder="Password"></input></div>
                <button>Login</button>
            </div>
        )
    }
}

export default LoginPage;