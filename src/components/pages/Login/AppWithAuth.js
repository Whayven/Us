import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import { SignIn, Greetings } from "aws-amplify-react";
import config from "../../../aws-exports";
import { CustomSignIn } from "../Login/CustomSignIn";
import App from "../../../container/App";
import Navigation from "../../navigation/Navigation"
import { Authenticator } from "aws-amplify-react/dist/Auth";

const signOutStyle = {
    position: 'absolute',
    backgroundColor: 'red',
    top: '0'
}

export class AppWithAuth extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Router>
                <div>
                <Navigation />
                    <Authenticator hide={[SignIn, Greetings]} amplifyConfig={config} 
                    >
                        <CustomSignIn />
                        <App />
                    </Authenticator>
                </div>
            </Router>

        );
    }
}

export default AppWithAuth;
