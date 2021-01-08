import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import DefaultLayout from 'components/layouts/Default';

const Login = ({
    valueInput,
    onChangeInput,
    isInvalidInput,
    isLoadingSubmit,
    onClickSubmit,
}) => (
    <DefaultLayout>
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
                value={valueInput}
                onChange={onChangeInput}
                isInvalid={isInvalidInput}
            />
        </FormControl>

        <Button
            mt={4}
            width="full"
            variant="outline"
            colorScheme="teal"
            isLoading={isLoadingSubmit}
            loadingText="Signing in..."
            onClick={onClickSubmit}
        >
            Sign In
        </Button>
    </DefaultLayout>
);

export default Login;
