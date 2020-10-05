import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        placeholder="Type name... "
      />
    </label>
  );
};
Filter.defaultProps = {
  onLeaveFeedback: () => {},
};
Filter.propTypes = {
  value: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
export default Filter;
