import React from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClickButton = (e) => {
    e.preventDefault();
    navigate('/credentials');
  };

  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h2" size="xl" mb={5}>
        Welcome To Password Manager
      </Heading>
      <Button colorScheme="blue" onClick={handleClickButton} size="lg">
        Get Started
      </Button>
    </Box>
  );
}

export default HomePage;
