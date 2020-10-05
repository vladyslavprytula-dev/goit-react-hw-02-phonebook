import React from "react";
import PropTypes from "prop-types";
// import './Filter.scss';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className="Filter__label">
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        className="Filter__input"
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
