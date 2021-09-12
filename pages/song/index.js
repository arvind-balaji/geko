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
  Text,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ImageTile from '../../components.js/ImageTile';
import { Layout } from '../../components.js/Layout';
import { useState } from 'react';

export const getServerSideProps = async ({ query }) => {
  console.log(process.env.SPOTIFY_TOKEN);
  // use spotify api to search song from query
  const { q } = query;
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${q}&type=track&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  console.log(q);
  console.log(data);
  return {
    props: {
      data: q?.length > 0 ? data.tracks.items : [],
      _q: q ?? '',
    },
  };
};

const SearchSong = ({ data, _q }) => {
  const router = useRouter();
  const [q, setQ] = useState(_q);

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
        <Flex my={30} w="550px">
          <InputGroup>
            <Input
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
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="550px">
          {data &&
            data.map((item, index) => (
              <Link href={`song/${item.id}`} passHref key={item.id}>
                <Flex
                  flexDir="column"
                  key={item.id}
                  bgColor="white"
                  boxShadow="sm"
                  alignSelf="stretch"
                  borderRadius="md"
                  mb={2}
                  p={5}
                  as="a">
                  <Heading size="md">{item.name}</Heading>
                  <Flex justify="space-between" mt={4}>
                    <Text>{item.album.artists[0].name}</Text>
                    <Text>{item.album.name}</Text>
                  </Flex>
                </Flex>
              </Link>
            ))}
        </Flex>
      </Flex>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
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
