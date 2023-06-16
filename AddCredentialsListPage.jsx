/*
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class AddCredentialsListPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>AddCredentialsListPage</div>
    )
  }
}

export default AddCredentialsListPage
*/
import { useState } from 'react';
import { Flex, Heading, Box, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function AddCredentialsListPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCredential = {
      name: name,
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3366/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCredential),
      });

      if (response.ok) {
        toast({
          title: 'Credential added.',
          description: 'The credential has been successfully added.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigate('/credentials');
      } else {
        toast({
          title: 'Error',
          description: 'Failed to add the credential.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction="column" align="center" mt={4}>
      <Heading>Add Credential</Heading>
      <Box mt={4} w="400px">
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={handleNameChange} />
          </FormControl>
          <FormControl id="username" mt={4} isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={handleUsernameChange} />
          </FormControl>
          <FormControl id="password" mt={4} isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button colorScheme="blue" mt={4} type="submit">
            Add Credential
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default AddCredentialsListPage;
