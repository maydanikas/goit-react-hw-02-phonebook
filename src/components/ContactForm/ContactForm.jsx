import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.contactsHandler(this.state);
    this.reset();
  };
  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoFocus
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  contactsHandler: PropTypes.func.isRequired,
};
