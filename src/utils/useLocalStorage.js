// https://usehooks.com/useLocalStorage/

import { useState } from 'react';
import PropTypes from 'prop-types';

const useLocalStorage = (key, initialValue = null) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);

            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

useLocalStorage.propTypes = {
    key: PropTypes.string.isRequired,
    initialValue: PropTypes.string,
};

export default useLocalStorage;
