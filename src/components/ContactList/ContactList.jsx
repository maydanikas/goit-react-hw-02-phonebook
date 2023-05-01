import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length !== 0 &&
        contacts.map(({ name, number }) => (
          <ul key={nanoid()}>
            <ContactItem name={name} number={number} onDelete={onDelete} />
          </ul>
        ))}
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
