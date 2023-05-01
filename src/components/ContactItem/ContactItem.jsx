import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li className={css.contactsListItem}>
      <span className={css.contactsListItemSpan}>{name}</span>{' '}
      <span className={css.contactsListItemSpan}>{number}</span>
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
