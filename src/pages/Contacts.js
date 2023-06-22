import { Container } from 'components/mainContainer.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import ContactsList from 'components/Contacts/contacts';
import Filter from 'components/Filter/filter';
import Form from 'components/Form/form';
import Loader from 'components/Loader/loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Container>
  );
};

export default Contacts;
