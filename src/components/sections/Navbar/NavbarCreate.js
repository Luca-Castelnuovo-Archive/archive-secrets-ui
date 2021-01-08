import { useState } from 'react';
import useFetch from 'use-http';
import { createStandaloneToast } from '@chakra-ui/react';
import NavbarCreateUI from 'components/ui/Navbar/NavbarCreate';

const NavbarCreate = ({ isOpen, onToggle }) => {
    const toast = createStandaloneToast();
    const [value, setValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const handleChange = (event) => setValue(event.target.value);
    const { post, response, loading } = useFetch('/');
    let outputData = undefined;

    const submit = async () => {
        if (!value) {
            return setIsInvalid(true);
        }

        const data = await post({
            name: value,
            data: {},
        });

        if (!response.ok) {
            toast({
                title: 'An error occurred.',
                description: 'Unable to delete store.',
                status: 'error',
                duration: 2000,
            });

            return setIsInvalid(true);
        }

        outputData = await data.data;
    };

    return (
        <NavbarCreateUI
            isOpen={isOpen}
            onToggle={onToggle}
            valueInput={value}
            onChangeInput={handleChange}
            isInvalidInput={isInvalid}
            isLoadingSubmit={loading}
            onClickSubmit={submit}
            outputData={outputData}
        />
    );
};

export default NavbarCreate;
