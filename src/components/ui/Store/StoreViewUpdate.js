import { FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react';

const StoreViewUpdate = ({
    valueTextarea,
    onChangeTextarea,
    isInvalidTextarea,
    isLoadingSubmit,
    onClickSubmit,
}) => (
    <>
        <FormControl>
            <FormLabel>Store Data</FormLabel>
            <Textarea
                value={valueTextarea}
                onChange={onChangeTextarea}
                isInvalid={isInvalidTextarea}
                rows={10}
            />
        </FormControl>

        <Button
            mt={4}
            width="full"
            variant="outline"
            colorScheme="teal"
            isLoading={isLoadingSubmit}
            loadingText="Updating..."
            onClick={onClickSubmit}
        >
            Update
        </Button>
    </>
);

export default StoreViewUpdate;
