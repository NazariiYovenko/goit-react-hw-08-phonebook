import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  selectContacts,
  selectContactsIsLoading,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts.selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contactsReducer';
import { filterContacts } from 'redux/filterSlice';

const ContactsPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filter = useSelector(selectFilter);

  const onChangeFilterValue = event =>
    dispatch(filterContacts(event.target.value));

  return (
    <div>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        mb="24px"
      >
        <Heading size="lg" m="auto">
          Add contacts to your Phonebook
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>
              Name:
              <Input {...register('name', { required: true })} type="text" />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Number
              <Input {...register('number', { required: true })} type="tel" />
            </FormLabel>
          </FormControl>
          <Button type="submit" colorScheme="orange">
            Add contact
          </Button>
        </form>
      </Box>

      {isLoading && <Loader />}
      <Box rounded={'lg'} boxShadow={'lg'} p={8} mb="24px">
        <Heading size="lg" mb="1">
          Find Contact
        </Heading>
        <form>
          <FormControl>
            <FormLabel>
              Find contact by name
              <Input
                type="text"
                value={filter}
                onChange={onChangeFilterValue}
              ></Input>
            </FormLabel>
          </FormControl>
        </form>
      </Box>

      <ul>
        {Array.isArray(visibleContacts) &&
          visibleContacts.map(contact => {
            return (
              <Box
                rounded={'lg'}
                boxShadow={'lg'}
                p={8}
                mb="24px"
                key={contact.id}
              >
                <HStack spacing="24px">
                  <Heading size="md">{contact.name}</Heading>
                  <Text py="2">{contact.number}</Text>
                  <Spacer />
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => onDeleteContact(contact.id)}
                  >
                    Delete
                  </Button>
                </HStack>
              </Box>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactsPage;
