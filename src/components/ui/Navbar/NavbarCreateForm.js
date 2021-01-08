import { useRef } from 'react';
import {
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
} from '@chakra-ui/react';

const NavbarCreateForm = ({
    onToggle,
    valueInput,
    onChangeInput,
    isInvalidInput,
    isLoadingSubmit,
    onClickSubmit,
}) => {
    const initialRef = useRef();

    return (
        <>
            <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Store Name</FormLabel>
                    <Input
                        ref={initialRef}
                        value={valueInput}
                        onChange={onChangeInput}
                        isInvalid={isInvalidInput}
                        placeholder="Enter your store name"
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button onClick={onToggle} mr={3}>
                    Cancel
                </Button>

                <Button
                    colorScheme="teal"
                    isLoading={isLoadingSubmit}
                    onClick={onClickSubmit}
                >
                    Create
                </Button>
            </ModalFooter>
        </>
    );
};

export default NavbarCreateForm;
