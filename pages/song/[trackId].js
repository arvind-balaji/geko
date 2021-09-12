import { useRouter } from 'next/router';
import { Layout } from '../../components.js/Layout';
import loading from '../../components.js/loading.json';

import { Image, Heading, Flex } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const TrackArt = () => {
    const router = useRouter();
    const { trackId } = router.query;

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoaded(true), 3000);
    }, []);
    return (
        <Layout bgColor="white">
            {/* <Image src="/loading.gif" /> */}
            <Flex justify="center" flexDirection="column" alignItems="center">
                {!loaded && <Lottie animationData={loading} />}
                {loaded && (
                    <>
                        <Heading mb={5}>your masterpiece</Heading>
                        <Image
                            src={`/art/${trackId}.png`}
                            borderRadius="xl"
                            h="lg"
                            w="lg"
                        />
                    </>
                )}
            </Flex>
        </Layout>
    );
};

export default TrackArt;
