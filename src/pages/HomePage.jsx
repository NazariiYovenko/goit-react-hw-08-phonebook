import { Link as ChakraLink } from '@chakra-ui/react';
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

const HomePage = () => {
  const { pathname } = useLocation();
  const authenticated = useSelector(selectAuthAuthenticated);
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            animation="scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
          >
            <Text as={'span'} color={'darkblue'}>
              Phonebook
            </Text>
          </Heading>

          <Text color={'gray.500'}>
            This is the Phone Book Application. You can manage your contacts
            here. You can add, delete and find contacts
          </Text>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            {!authenticated ? (
              <>
                <Button as={Link} to="/register" colorScheme={'orange'}>
                  Get Started
                </Button>
                <ChakraLink
                  to="/login"
                  as={Link}
                  _hover={{
                    color: 'orange',
                  }}
                  fontWeight="bold"
                  color={pathname === '/login' ? 'orange' : 'black'}
                >
                  Login if you already have an account
                </ChakraLink>
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
