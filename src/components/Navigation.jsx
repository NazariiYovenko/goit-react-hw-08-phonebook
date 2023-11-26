import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
// import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import UserMenu from './UserMenu';
// import { logOutThunk } from 'redux/authReducer';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const { pathname } = useLocation();

  return (
    <Box
      as="header"
      bg="darkblue"
      color="white"
      minH="50px"
      p="10px"
      pl="2rem"
      pr="2rem"
    >
      <Flex justifyContent={'space-between'} alignItems="center">
        <ChakraLink
          to="/"
          as={Link}
          _hover={{
            textDecoration: 'none',
            bg: 'orange',
            color: 'black',
            rounded: '4px',
          }}
          fontWeight="bold"
          color={pathname === '/' ? 'orange' : 'white'}
        >
          Home
        </ChakraLink>
        {authenticated ? (
          <>
            <ChakraLink
              to="/contacts"
              as={Link}
              _active={{ color: 'red' }}
              _hover={{
                textDecoration: 'none',
                bg: 'orange',
                color: 'black',
                rounded: '4px',
              }}
              fontWeight="bold"
              color={pathname === '/contacts' ? 'orange' : 'white'}
            >
              Contacts
            </ChakraLink>
            <UserMenu />
          </>
        ) : (
          <>
            <ChakraLink
              to="/register"
              as={Link}
              _hover={{
                textDecoration: 'none',
                bg: 'orange',
                color: 'black',
                rounded: '4px',
              }}
              fontWeight="bold"
              color={pathname === '/register' ? 'orange' : 'white'}
            >
              Register
            </ChakraLink>
            <ChakraLink
              to="/login"
              as={Link}
              _hover={{
                textDecoration: 'none',
                bg: 'orange',
                color: 'black',
                rounded: '4px',
              }}
              fontWeight="bold"
              color={pathname === '/login' ? 'orange' : 'white'}
            >
              Login
            </ChakraLink>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;
