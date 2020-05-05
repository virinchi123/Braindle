import React, { Component, Fragment } from 'react';
import Modal from '../../UI/Modal/Modal';

const ErrorHandler = (WrappedComponent, axios) => {
    return (class extends Component {
        state = {
            error: null
        }

        reqint = null;
        respint = null;
        componentWillMount() {
            this.reqint = axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request;
            })
            this.respint = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqint);
            axios.interceptors.response.eject(this.respint);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            console.log(this.state.error)
            return (
                <Fragment>
                    <Modal backHandler={this.errorConfirmedHandler} show={this.state.error}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>)
        }
    }
    );
}

export default ErrorHandler;