import { Flex, Box, Heading } from '@chakra-ui/react';

const ImageTile = ({ text, image, size = 'xl', ...rest }) => {
  return (
    <Flex
      minH="45vh"
      backgroundColor="#434443"
      borderRadius={25}
      px={10}
      py={5}
      color="white"
      {...rest}
      {...(image && {
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("${image}")`,
      })}>
      <Box>
        <Heading size={size}>{text}</Heading>
      </Box>
    </Flex>
  );
};

export default ImageTile;
