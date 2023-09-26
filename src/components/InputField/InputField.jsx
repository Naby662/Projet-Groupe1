import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({type, name, placeholder}) => (
  <div className="mb-4">
  <input type={type} id="firstname" name={name}
    value={formData.firstname}
    onChange={handleChange}
    className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
    placeholder={placeholder}
    required
  />
</div>

);

InputField.propTypes = {};

InputField.defaultProps = {};

export default InputField;
