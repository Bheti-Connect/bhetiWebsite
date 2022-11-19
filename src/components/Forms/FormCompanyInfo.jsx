import React, { Component } from 'react';

export class FormProjectInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <h1>
                    Hello Richard
                </h1>
            </div>
        )
    }
}

export default FormProjectInfo;