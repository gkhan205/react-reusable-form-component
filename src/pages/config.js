import { Validators } from "library/utilities/Validator";

export const formConstants = [
    {
        field: 'email',
        type: 'email',
        validators: [
            {check: Validators.required, message: 'Email is mandatory'},
            {check: Validators.email, message: 'Email entered is not valid'}
        ],
        required: true,
        title: 'Email',
        placeholder: 'Enter your email',
        styleClass: 'col-sm-6',
        extraProps: {
            maxLength: 30
        }
    },
    {
        field: 'budget',
        type: 'dropdown',
        validators: [],
        required: false,
        title: 'Your Budget',
        styleClass: 'col-sm-6',
    },
    {
        field: 'message',
        type: 'textarea',
        validators: [],
        required: false,
        title: 'Message',
        placeholder: 'Enter your message',
        styleClass: 'col-sm-12',
    },
    {
        field: 'notify',
        type: 'checkbox',
        validators: [],
        required: false,
        title: 'Subscribe to our mailing list',
        styleClass: 'col-sm-12',
    }
]