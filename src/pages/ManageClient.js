import React, { Component } from 'react'
import AuthContext from '../shared/auth/auth-context'

export default class ManageClient extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
ManageClient.contextType = AuthContext;