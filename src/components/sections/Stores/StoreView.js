import { useState } from 'react';
import useFetch from 'use-http';
import StoreViewUI from 'components/ui/Store/StoreView';

const StoreView = ({ viewOpen, id }) => {
    const [value, setValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [decryptedStore, setDecryptedStore] = useState(false);
    const handleChange = (event) => setValue(event.target.value);
    const { post, response, loading, data = [] } = useFetch(`/${id}`);

    const submit = async () => {
        if (!value) {
            return setIsInvalid(true);
        }

        await post({
            key: value,
        });

        if (!response.ok) {
            return setIsInvalid(true);
        }

        const outputData = await data;

        setDecryptedStore(outputData.data);
    };

    return (
        <StoreViewUI
            id={id}
            storeKey={value}
            viewOpen={viewOpen}
            decryptedStore={decryptedStore}
            valueInpute={value}
            onChangeInput={handleChange}
            isInvalidInput={isInvalid}
            isLoadingSubmit={loading}
            onClickSubmit={submit}
        />
    );
};

export default StoreView;
