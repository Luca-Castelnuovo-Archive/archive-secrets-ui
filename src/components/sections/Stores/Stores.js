import useFetch from 'use-http';
import { Box, Heading, Text, Skeleton } from '@chakra-ui/react';
import Store from './Store';

const Stores = () => {
    const { loading, data = [] } = useFetch('/', []);

    if (loading) {
        return <Skeleton height="127px" />;
    }

    if (!data || !data.data || data.data.length === 0) {
        return (
            <Box p={4} align="center" borderRadius={10} boxShadow="2xl">
                <Heading>No stores found</Heading>
                <Text>Create your first one.</Text>
            </Box>
        );
    }

    return data.data.map((store) => <Store key={store.id} {...store} />);
};

export default Stores;
