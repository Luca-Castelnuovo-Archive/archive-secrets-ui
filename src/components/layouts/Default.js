import { Flex, Box, Heading } from '@chakra-ui/react';

const Default = ({ children }) => (
    <Flex
        align="center"
        justify={{
            base: 'center',
            md: 'space-around',
        }}
        minH="70vh"
    >
        <Box px={4} width="full" maxWidth="500px" textAlign="center">
            <Box p={4}>
                <Box textAlign="center">
                    <Heading>Secrets Store</Heading>
                </Box>

                <Box my={8} textAlign="left">
                    {children}
                </Box>
            </Box>
        </Box>
    </Flex>
);

export default Default;
