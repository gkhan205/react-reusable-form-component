import React, {Component} from 'react';

import './App.css';
import InputField from "library/components/InputField";
import {Validators} from "library/utilities/Validator";

export default class App extends Component {

    state = {
        text: '',
        number: '',
        email: ''
    };

    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };

    render() {
        const {text, number, email} = this.state;

        return (
            <div className="container">
                <h2>React Reusable Form Component</h2>
                <h4>Input Field</h4>
                <InputField
                    value={text}
                    type='text'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>

                <InputField
                    value={number}
                    placeholder='Number field'
                    type='text'
                    label='Number'
                    validators={[
                        {check: Validators.number, message: 'Number is not valid'}
                    ]}
                    onChange={this.handleChange('number')}/>

                <InputField
                    value={email}
                    placeholder='Email Field'
                    type='email'
                    label='Email'
                    validators={[
                        {check: Validators.email, message: 'Email is not valid'}
                    ]}
                    onChange={this.handleChange('email')}/>
            </div>
        );
    }
}
