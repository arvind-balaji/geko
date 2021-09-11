import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Box, Button, Image, Text } from '@chakra-ui/react'

// import { Button } from '@chakra-ui/button'
export default function Home() {
  return (
    <Box backgroundImage='url("/cassete.jpg")' height="100vh" backgroundSize="cover" d="flex" justifyContent='center' alignItems='center' flexDirection='column'>

      <Text fontSize={50}>
        We bring your music to life
      </Text>
      <Button title="Help Meee" />

      <Box>


      </Box>

    </Box>
  )
}
