import React, {useRef} from 'react';
import Form from 'library/components/Form';

import {formConstants} from './config'
import Button from 'library/components/Button';

const budgetData = [
    {value: 5000, label: '$5000'},
    {value: 15000, label: '$15000'},
    {value: 25000, label: '$25000'},
    {value: 35000, label: '$35000'},
    {value: 50000, label: '$50000'},
]

const FormContainer = () => {
    const formRef = useRef()

    const handleSave = () => {
        const {current} = formRef;
        const data = current.getFormData();
        console.log(data)
        if(data.isFormValid) {
            alert('Success!')
        }
        console.log(data.formData)
    }

    return (
        <>
        <Form 
            ref={formRef} 
            model={formConstants}
            data={{budget: budgetData}} />
         
         <Button value='Save' onClick={handleSave} />
        </>
    )
}

export default FormContainer;