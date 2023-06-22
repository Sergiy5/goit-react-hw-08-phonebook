import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { WraperForm, Input, BtnSubmit, Label } from './form.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';


const Form = ()=> {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setContact(prev => ({ ...prev, [target.name]: target.value }));
  };

  const isContactExsist = newName => {
    if (contacts.length) {
      return contacts.find(({ name }) => name === newName);
    }
  };

  const addNewContact = newContact => {
    isContactExsist(newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid(5);
    const {name, number} = contact
    addNewContact({ id, name, number  });
   setContact({name:'', number:''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <WraperForm>
        <Label htmlFor="nameInput" className="lableInputName">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={contact.name}
        />
        <Label htmlFor="numberInput" className="lableInputNumber">
          Number
        </Label>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={contact.number}
        />
        <BtnSubmit type="submit" className="btnSubmit">
          Add contact
        </BtnSubmit>
      </WraperForm>
    </form>
  );
};

export default Form;
