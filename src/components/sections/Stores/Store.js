import useFetch from 'use-http';
import { createStandaloneToast } from '@chakra-ui/react';
import StoreUI from 'components/ui/Store/Store';

const Store = ({ id, name }) => {
    const toast = createStandaloneToast();
    const { del, response, loading } = useFetch(`/${id}`);

    const deleteStore = async () => {
        await del();

        if (!response.ok) {
            return toast({
                title: 'An error occurred.',
                description: 'Unable to delete store.',
                status: 'error',
                duration: 2000,
            });
        }

        window.location.reload();
    };

    return (
        <StoreUI
            id={id}
            name={name}
            loading={loading}
            deleteStore={deleteStore}
        />
    );
};

export default Store;
