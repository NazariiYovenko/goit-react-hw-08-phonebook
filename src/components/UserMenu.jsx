import { Button, HStack, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';

const UserMenu = () => {
  const userState = useSelector(selectAuthUserData);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <>
      <HStack spacing="24px">
        <Tag size="lg" colorScheme="orange">
          <TagLabel>{userState.email}</TagLabel>
        </Tag>
        <Button onClick={onLogOut} colorScheme="orange" size="sm">
          Logout
        </Button>
      </HStack>
    </>
  );
};

export default UserMenu;
