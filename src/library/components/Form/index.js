import React, { Component } from 'react';
import PropTypes from 'prop-types'

import InputField from "library/components/InputField";
import Dropdown from "library/components/Dropdown";
import Checkbox from "library/components/Checkbox";

export default class Form extends Component {

    state = {
        formData: {},
        isFormValid: false
    }

    handleChange = (value, error = false, lastEditedField = '') => {

    }

    renderFormInput = () => {
        let domArray = [];
        const {model, data} = this.props;

        model.forEach(field => {
            switch(field.type) {
                case 'text':
                case 'email':
                case 'number':
                case 'textarea':
                case 'url':
                    domArray.push(
                        <div className={`form-group ${field.styleClass}`}>
                            <InputField
                                label={field.title}
                                placeholder={field.placeholder}
                                validators={field.validators}
                                type={field.type}
                                onChange={this.handleChange}
                            />
                        </div>
                    )
                break;
                case 'dropdown':
                    domArray.push(
                        <div className={`form-group ${field.styleClass}`}>
                            <Dropdown
                                data={data[field.field]}
                                placeholder={field.title}
                                onChange={this.handleChange}
                            />
                        </div>
                    )
                break;
                case 'checkbox':
                    domArray.push(
                        <div className={`form-group ${field.styleClass}`}>
                            <Checkbox
                            label={field.title}
                            onChange={this.handleChange}
                            />
                        </div>
                    )
                break;
            }
        })

        return domArray;
    }

    render() {
        return (
            <div className='form-container'>
                {this.renderFormInput()}
            </div>
        )
    }
}

Form.propTypes = {
    model: PropTypes.object.isRequired,
    data: PropTypes.object,
    values: PropTypes.object,
    onChange: PropTypes.func
}

Form.defaultProps = {
    data: [],
    values: {},
    onChange: () => {}
}