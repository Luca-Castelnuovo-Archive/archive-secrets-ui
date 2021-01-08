import {
    Collapse,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';
import StoreViewUpdate from 'components/sections/Stores/StoreViewUpdate';

const StoreView = ({
    id,
    storeKey,
    viewOpen,
    decryptedStore,
    valueInput,
    onChangeInput,
    isInvalidInput,
    isLoadingSubmit,
    onClickSubmit,
}) => (
    <Collapse in={viewOpen} animateOpacity>
        <Box p="20px" mt={4}>
            {!decryptedStore && (
                <>
                    <FormControl>
                        <FormLabel>Store Key</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter your store key"
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
                        loadingText="Decrypting..."
                        onClick={onClickSubmit}
                    >
                        Decrypt
                    </Button>
                </>
            )}

            {decryptedStore && (
                <StoreViewUpdate
                    id={id}
                    storeKey={storeKey}
                    initialValue={decryptedStore}
                />
            )}
        </Box>
    </Collapse>
);

export default StoreView;
