import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from 'App';
import theme from 'utils/theme';
// import reportWebVitals from 'Utils/reportWebVitals';

ReactDOM.render(
    <StrictMode>
        <ColorModeScript />

        <ChakraProvider theme={theme} resetCSS={true}>
            <App />
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
);

// reportWebVitals(console.log);
