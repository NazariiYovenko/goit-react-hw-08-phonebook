import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <Heading fontSize="2xl">Sign Up to create new account</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>
            Email:
            <Input
              defaultValue=""
              {...register('email', { required: true })}
              type="email"
            />
            {errors.email && <span>This field is required</span>}
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            Name:
            <Input
              defaultValue=""
              {...register('name', { required: true })}
              type="text"
            />
            {errors.name && <span>This field is required</span>}
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            Password:
            <Input
              defaultValue=""
              {...register('password', { required: true, minLength: 7 })}
              type="password"
            />
            {errors.password && <span>This field is requared</span>}
          </FormLabel>
        </FormControl>

        <Button type="submit" colorScheme="orange">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
