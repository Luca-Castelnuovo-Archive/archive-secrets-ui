import DefaultLayout from 'components/layouts/Default';
import { Text } from '@chakra-ui/react';

const NotFound = () => (
    <DefaultLayout>
        <Text fontSize="2xl" align="center">
            Sorry this page does not exist!
        </Text>
    </DefaultLayout>
);

export default NotFound;
