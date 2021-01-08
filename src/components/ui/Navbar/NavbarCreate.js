import { useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
} from '@chakra-ui/react';
import NavbarCreateForm from './NavbarCreateForm';
import NavbarCreateDisplay from './NavbarCreateDisplay';

const NavbarCreate = ({
    isOpen,
    onToggle,
    valueInput,
    onChangeInput,
    isInvalidInput,
    isLoadingSubmit,
    onClickSubmit,
    outputData,
}) => {
    const initialRef = useRef();

    return (
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onToggle}>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Create Store</ModalHeader>

                {!outputData && (
                    <NavbarCreateForm
                        onToggle={onToggle}
                        valueInput={valueInput}
                        onChangeInput={onChangeInput}
                        isInvalidInput={isInvalidInput}
                        isLoadingSubmit={isLoadingSubmit}
                        onClickSubmit={onClickSubmit}
                    />
                )}
                {outputData && <NavbarCreateDisplay outputData={outputData} />}
            </ModalContent>
        </Modal>
    );
};

export default NavbarCreate;
