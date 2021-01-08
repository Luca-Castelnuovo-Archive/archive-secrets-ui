import { useState, useRef } from 'react';
import {
    Box,
    Heading,
    ButtonGroup,
    Button,
    useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import StoreView from 'components/sections/Stores/StoreView';

const Store = ({ id, name, loading, deleteStore }) => {
    const cancelRef = useRef();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box p={4} mb={8} rounded="md" boxShadow="2xl">
            <Heading mb={4}>{name}</Heading>

            <ButtonGroup variant="outline" spacing="6" width="full">
                <Button
                    colorScheme="teal"
                    variant="solid"
                    width="full"
                    onClick={onToggle}
                >
                    {isOpen ? 'Close' : 'Open'}
                </Button>

                <Button colorScheme="red" onClick={() => setDeleteOpen(true)}>
                    Delete
                </Button>
            </ButtonGroup>

            <AlertDialog
                isOpen={deleteOpen}
                leastDestructiveRef={cancelRef}
                onClose={() => setDeleteOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete {name} Store
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef}
                                onClick={() => setDeleteOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                colorScheme="red"
                                isLoading={loading}
                                onClick={deleteStore}
                                ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            <StoreView viewOpen={isOpen} id={id} />
        </Box>
    );
};

export default Store;
