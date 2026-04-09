import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Select.module.css';

function Select({ label, value, onChange, options }) {
    return (
        <div className={cssClasses.selectWrapper}>
            {label && <label className={cssClasses.label}>{label}</label>}
            <select
                className={cssClasses.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Select;
