import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({value, label, field, data, placeholder, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value, field);
    };

    return (
        <>
            {label && <label htmlFor="app-dropdown-field">{label}</label>}
            <select
                value={value}
                className="form-control"
                onChange={handleChange}>
                <option value="">{placeholder ? placeholder : 'Select a value'}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    label: PropTypes.string,
    field: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    placeholder: '',
    label: '',
    field:''
};

export default Dropdown;
