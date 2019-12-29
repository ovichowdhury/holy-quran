import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProxyRedirect extends Component {
    render() {
        return (
            <div>
                Loading....
            </div>
        )
    }

    componentDidMount() {
        if (this.props.location.state) {
            let paylaod = this.props.location.state;
            this.props.history.push(paylaod.to, { index: paylaod.index });
        }

    }
}

export default withRouter(ProxyRedirect);
