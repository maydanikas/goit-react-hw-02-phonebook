import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={css.contactsList}>
        {contacts.length !== 0 &&
          contacts.map(({ name, number }) => (
            <ContactItem
              key={nanoid()}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
