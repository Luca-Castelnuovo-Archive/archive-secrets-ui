import { useRef } from 'react';
import {
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
} from '@chakra-ui/react';

const NavbarCreateDisplay = ({ outputData }) => {
    const initialRef = useRef();

    return (
        <>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Secret ID</FormLabel>
                    <Input value={outputData.id} readOnly />
                </FormControl>
                <FormControl>
                    <FormLabel>Secret Key</FormLabel>
                    <Input value={outputData.key} readOnly />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                    colorScheme="teal"
                    ref={initialRef}
                    onClick={() => window.location.reload()}
                >
                    Done
                </Button>
            </ModalFooter>
        </>
    );
};

export default NavbarCreateDisplay;
