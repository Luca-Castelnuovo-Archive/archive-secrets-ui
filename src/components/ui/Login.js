import { useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Login = ({ callback, isInvalid, isLoading }) => {
    const [value, setValue] = useState('');
    const onChange = (event) => setValue(event.target.value);

    return (
        <>
            <FormControl>
                <FormLabel>API Url</FormLabel>
                <Input
                    type="url"
                    size="lg"
                    variant="filled"
                    value="https://api.castelnuovo.xyz/secrets"
                    isDisabled
                />
            </FormControl>

            {/* TODO: insert top-bottom space */}

            <FormControl>
                <FormLabel>API Key</FormLabel>
                <Input
                    type="password"
                    placeholder="Enter your api key"
                    size="lg"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    isInvalid={isInvalid}
                />
            </FormControl>

            <Button
                mt={4}
                width="full"
                variant="outline"
                colorScheme="teal"
                isLoading={isLoading}
                loadingText="Signing in..."
                onClick={() => callback(value)}
            >
                Sign In
            </Button>
        </>
    );
};

export default Login;
