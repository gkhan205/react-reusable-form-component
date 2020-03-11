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

    componentDidMount() {
        this.createFormData();
    }

    checkValidation (formData) {
        const {model} = this.props;
        let isFormValid = true;

        model.forEach(item => {
            if(item.required) {
                isFormValid = isFormValid && !formData[item.field + 'Error']
            }
        })

        return isFormValid;
    }

    createFormData () {
        const {model, values} = this.props;
        let formData = {};

        model.forEach(item => {
            if(item.type === 'checkbox') {
                formData[item.field] = values[item.field] ? values[item.field] : false;
            } else {
                formData[item.field] = values[item.field] ? values[item.field] : '';
            }
            formData[item.field + 'Error'] = item.required
        });

        this.setState({
            formData, 
            isFormValid: this.checkValidation(formData)
        })
    }

    handleChange = (value, field, error = false) => {
        const clonedFormData = {...this.state.formData};
        clonedFormData[field] = value;
        clonedFormData[field + 'Error'] = error && error.error

        this.setState({
            formData: clonedFormData,
            isFormValid: this.checkValidation(clonedFormData)
        }, () => {
            if(this.props.onChange) {
                this.props.onChange(this.createValueToSend());
            }
        });
    }

    createValueToSend() {
        const {formData, isFormValid} = this.state;
        const data = {};

        for(let key in formData) {
            if(!key.includes('Error')) {
                data[key] = formData[key]
            }
        }

        return {
            formData: data,
            isFormValid
        }
    }

    getFormData = () => {
        return this.createValueToSend()
    }

    resetForm = () => {
        this.createFormData();
    }

    renderFormInput() {
        const {model, data} = this.props;
        const {formData} = this.state;
        let domArray = [];

        model.forEach((field, index) => {
            switch(field.type) {
                case 'text':
                case 'email':
                case 'number':
                case 'textarea':
                case 'password':
                case 'url':
                    domArray.push(
                        <div key={index} className={`form-group ${field.styleClass}`}>
                            <InputField
                                value={formData[field.field]}
                                field={field.field}
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
                        <div key={index} className={`form-group ${field.styleClass}`}>
                            <Dropdown
                                field={field.field}
                                value={formData[field.field]}
                                data={data[field.field]}
                                label={field.title}
                                placeholder={field.placeholder}
                                onChange={this.handleChange}
                            />
                        </div>
                    )
                break;
                case 'checkbox':
                    domArray.push(
                        <div key={index} className={`form-group ${field.styleClass}`}>
                            <Checkbox
                                field={field.field}
                                label={field.title}
                                selected={formData[field.field] ? formData[field.field] : false}
                                onChange={this.handleChange}
                            />
                        </div>
                    )
                break;
                default:
                    break;
            }
        })

        return domArray;
    }

    render() {
        return (
            <div className='form-container row'>
                {this.renderFormInput()}
            </div>
        )
    }
}

Form.propTypes = {
    model: PropTypes.array.isRequired,
    data: PropTypes.object,
    values: PropTypes.object,
    onChange: PropTypes.func
}

Form.defaultProps = {
    data: [],
    values: {},
    onChange: () => {}
}