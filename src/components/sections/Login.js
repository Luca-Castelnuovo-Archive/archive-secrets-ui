import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import useFetch from 'use-http';
import { createStandaloneToast } from '@chakra-ui/react';
import useLocalStorage from 'utils/useLocalStorage';
import LoginUI from 'components/ui/Login';

const Login = () => {
    const toast = createStandaloneToast();

    const [, setLocation] = useLocation();
    const [isInvalid, setIsInvalid] = useState(false);
    const [, setApiKey] = useLocalStorage('api_key', '');

    const { get, response, loading } = useFetch('/');

    useEffect(() => setApiKey(null), []);

    const callback = async (value) => {
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
            callback={callback}
            isInvalid={isInvalid}
            isLoading={loading}
        />
    );
};

export default Login;
