import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flex, Heading, Box, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';

function EditCredentialPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3366/credentials/${id}`);
        const data = await response.json();
        setName(data.name);
        setUsername(data.username);
        setPassword(data.password);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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

    const updatedCredential = {
      name: name,
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`http://localhost:3366/credentials/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCredential),
      });

      if (response.ok) {
        toast({
          title: 'Credential updated.',
          description: 'The credential has been successfully updated.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigate('/credentials');
      } else {
        toast({
          title: 'Error',
          description: 'Failed to update the credential.',
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
      <Heading>Edit Credential</Heading>
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
            Update Credential
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default EditCredentialPage;
