// song search page

import {
  Flex,
  Box,
  Heading,
  Input,
  InputLeftElement,
  IconButton,
  InputGroup,
  Button,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

import ImageTile from '../../components.js/ImageTile';
import { Layout } from '../../components.js/Layout';
import { useState } from 'react';

export const getServerSideProps = async ({ query }) => {
  console.log(process.env.SPOTIFY_TOKEN);
  // use spotify api to search song from query
  const { q } = query;
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
      },
    },
  );
  const data = await response.json();

  console.log(data);
  return {
    props: {
      data: data.tracks.items,
    },
  };
};

const SearchSong = ({ data }) => {
  const router = useRouter();
  const [q, setQ] = useState();

  return (
    <Layout>
      <ImageTile
        image="/cassete-outline.jpeg"
        text="paint with music"
        size="xl"
      />
      {/* <InputLeftElement
        pointerEvents="none"
      // children={<Search2Icon />}
      /> */}
      <Flex alignItems="center" flexDirection="column">
        <Flex>
          <Heading></Heading>
        </Flex>
        <Flex my={30} minW="450px">
          <InputGroup>
            {/* <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              size="lg"
              top={1}
              // fontSize="1.2em"
              children={<Search2Icon fontSize="xl" />}
            /> */}
            <Input
              type="tel"
              placeholder="Search for songs"
              size="lg"
              variant="filled"
              mr="15"
              borderColor="teal.500"
              borderWidth="1px"
              borderStyle="solid"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
            <IconButton
              size="lg"
              colorScheme="pink"
              icon={<Search2Icon size="lg" />}
              onClick={() => router.push(`?q=${q}`)}
            />
          </InputGroup>
        </Flex>
        {/* <Flex alignItems="center"><Button }>Foo</Button></Flex> */}
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minW="450px">
        {data.map((item, index) => (
          <Flex flexDir="column" key={item.id}>
            <Heading>{item.name}</Heading>
          </Flex>
        ))}
      </Flex>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* <Flex
        minH="45vh"
        backgroundColor="#434443"
        borderRadius={25}
        px={10}
        py={5}
        color="white"
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={`url("/cassete-outline.jpeg")`}>
        <Box>
          <Heading size="xl">paint with music</Heading>
        </Box>
      </Flex> */}
    </Layout>
  );
};

export default SearchSong;
