import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import useFetch from 'use-http';
import { createStandaloneToast } from '@chakra-ui/react';
import useLocalStorage from 'utils/useLocalStorage';
import LoginUI from 'components/ui/Login';

const Login = () => {
    const toast = createStandaloneToast();
    const [, setLocation] = useLocation();
    const [value, setValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [, setApiKey] = useLocalStorage('api_key', '');
    const handleChange = (event) => setValue(event.target.value);
    const { get, response, loading } = useFetch(
        'https://api.castelnuovo.xyz/secrets'
    );

    useEffect(() => setApiKey(null), []);

    const submit = async () => {
        if (!value) {
            return setIsInvalid(true);
        }

        await get(`?api_key=${value}`);

        if (!response.ok) {
            toast({
                position: 'top-right',
                title: 'Invalid API Key',
                status: 'error',
                duration: 1500,
            });

            return setIsInvalid(true);
        }

        setApiKey(value);
        setLocation('/dashboard');
    };

    return (
        <LoginUI
            valueInput={value}
            onChangeInput={handleChange}
            isInvalidInput={isInvalid}
            isLoadingSubmit={loading}
            onClickSubmit={submit}
        />
    );
};

export default Login;
