import { useState } from 'react';
import useFetch from 'use-http';
import { createStandaloneToast } from '@chakra-ui/react';
import StoreViewUpdateUI from 'components/ui/Store/StoreViewUpdate';

const StoreViewUpdate = ({ id, storeKey, initialValue }) => {
    const toast = createStandaloneToast();
    const [value, setValue] = useState(initialValue);
    const [isInvalid, setIsInvalid] = useState(false);
    const handleChange = (event) => setValue(event.target.value);
    const { put, response, loading } = useFetch(`/${id}`);

    const update = async () => {
        if (!value) {
            return setIsInvalid(true);
        }

        try {
            const inputData = JSON.parse(value);

            await put({
                key: storeKey,
                data: inputData,
            });
        } catch (e) {
            toast({
                position: 'top-right',
                title: 'Invalid JSON',
                status: 'error',
                duration: 2000,
            });

            return setIsInvalid(true);
        }

        if (!response.ok) {
            const outputData = await response.json();

            toast({
                position: 'top-right',
                title: outputData.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
            });

            return setIsInvalid(true);
        }

        toast({
            position: 'top-right',
            title: 'Store updated.',
            status: 'success',
            duration: 1500,
            isClosable: true,
        });

        return setIsInvalid(false);
    };

    return (
        <StoreViewUpdateUI
            valueTextarea={value}
            onChangeTextarea={handleChange}
            isInvalidTextarea={isInvalid}
            isLoadingSubmit={loading}
            onClickSubmit={update}
        />
    );
};

export default StoreViewUpdate;
