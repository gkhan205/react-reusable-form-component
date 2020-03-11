import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({label,field, selected, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {checked} = event.target;
        onChange(checked, field);
    };

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    className='mr-2'
                    value={selected}
                    defaultChecked={selected}
                    onChange={handleChange}/>

                {label}
            </label>
        </>
    )
};

Checkbox.propTypes = {
    field: PropTypes.string,
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    styleClass: '',
    field: ''
};

export default Checkbox;
