import React from 'react'
import { Box, VStack, Text, IconButton } from '@chakra-ui/react'
import  { EditIcon, DeleteIcon } from '@chakra-ui/icons'
function CredentialCard({ credential }) {
  return (
    <>
   <Box borderWidth={2} p={4} bg='gray.100' position='relative' >
    <VStack align="start" >
        <Text>{ credential.name }</Text>
        <Text>{ credential.url }</Text>
        <Text>Username: { credential.username }</Text>
        <Text>Password: { credential.password }</Text>
    </VStack>
   </Box>
   <Box position="absolute" bottom={2} right={1} >
    <IconButton icon={<EditIcon/>} />
    <IconButton icon={<DeleteIcon/>} />
   </Box>
   </>
  )
}

export default CredentialCard