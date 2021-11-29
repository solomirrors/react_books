import React, {Component} from "react";
import Spinner from "../../spinner";

export default class ErrorBoundry extends Component{
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
      this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <Spinner/>
        }

        return this.props.children;
    }
}