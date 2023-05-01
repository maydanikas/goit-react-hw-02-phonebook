import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      Find contacts by Name
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
