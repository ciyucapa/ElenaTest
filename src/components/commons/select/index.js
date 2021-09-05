import PropTypes from "prop-types";

const SelectField = (props) => (
    <select 
        value={props.value} 
        onChange={props.onSelect}>
            {props.options.map((option) => (
                <option 
                    key={option.value} 
                    value={option.value}>
                        {option.label}
                </option>
            ))}
    </select>
);

SelectField.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onSelect: PropTypes.func,
};

SelectField.defaultProps = {
    value: '',
    options: [],
    onSelect: () => {},
};

export default SelectField;