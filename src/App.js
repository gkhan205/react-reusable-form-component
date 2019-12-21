import React, {Component} from 'react';

import './App.css';

import Button from 'library/components/Button';
import InputField from "library/components/InputField";
import Dropdown from "library/components/Dropdown";
import {Validators} from "library/utilities/Validator";
import Checkbox from "library/components/Checkbox";

export default class App extends Component {

    state = {
        text: '',
        number: '',
        email: '',
        country: '',
        message: '',
        acceptance: false
    };

    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };

    handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };

    handleDropdown = (country) => {
        this.setState({country});
    };

    handleCheckbox = (acceptance) => {
        this.setState({acceptance});
    };

    render() {
        const {text, country, message, acceptance} = this.state;

        return (
            <div className="container">
                <h2>React Reusable Form Component</h2>
                <hr/>
                <InputField
                    value={text}
                    type='text'
                    placeholder='Enter text here...'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>

                <Dropdown
                    data={[
                        {value: 1, label: 'India'},
                        {value: 2, label: 'USA'},
                        {value: 3, label: 'UK'},
                        {value: 4, label: 'Germany'},
                        {value: 5, label: 'Russia'},
                        {value: 5, label: 'Italy'},
                    ]}
                    styleClass='mt-3'
                    value={country}
                    placeholder='Select Country'
                    onChange={this.handleDropdown}
                />

                <InputField
                    value={message}
                    type='textarea'
                    placeholder='Enter message!'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('message')}/>

                <Checkbox
                    label='I Accept'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />

                <Button
                    onClick={this.handleClick}
                    value='Click me!'/>

            </div>
        );
    }
}
