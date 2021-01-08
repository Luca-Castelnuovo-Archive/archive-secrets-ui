import { Flex, Stack, Box, Heading } from '@chakra-ui/react';

const Default = ({ children }) => (
    <Flex
        align="center"
        justify={{
            base: 'center',
            md: 'space-around',
        }}
        minH="70vh"
    >
        <Stack
            w={{ base: '80%', md: '40%' }}
            align={['center', 'center', 'flex-start', 'flex-start']}
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
        </Stack>
    </Flex>
);

export default Default;
