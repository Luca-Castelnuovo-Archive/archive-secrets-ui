import { Provider } from 'use-http';
import useLocalStorage from 'utils/useLocalStorage';

const FetchProvider = ({ children }) => {
    const [apiKey] = useLocalStorage('api_key');

    const options = {
        headers: {
            'X-Api-Key': apiKey,
        },
    };

    return (
        <Provider url="https://api.castelnuovo.xyz/secrets" options={options}>
            {children}
        </Provider>
    );
};

export default FetchProvider;
