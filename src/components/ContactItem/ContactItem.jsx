import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <span>{name}</span> <span>{number}</span>
      <button type="button" onClick={() => onDelete(number)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
