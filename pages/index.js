import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button } from '@chakra-ui/react'
// import { Button } from '@chakra-ui/button'
export default function Home() {
  return (
    <Box>
      <Button mx={10} borderRadius={20}>Foo</Button>
    </Box>
  )
}
