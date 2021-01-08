import { Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import NavbarCreate from 'components/sections/Navbar/NavbarCreate';
import NavbarLink from './NavbarLink';
import NavbarBtn from './NavbarBtn';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex as="nav" mb={8}>
            {/* TODO: When on movile flex the entries below each other */}

            <NavbarBtn
                onClick={onToggle}
                variant="solid"
                colorScheme="teal"
                borderWidth={1}
                boxShadow="lg"
            >
                Create Store
            </NavbarBtn>
            <NavbarCreate isOpen={isOpen} onToggle={onToggle} />

            <Spacer />

            <NavbarLink to="/docs" variant="outline" colorScheme="teal">
                Documentation
            </NavbarLink>

            <Spacer />

            <NavbarLink isLast to="/" variant="outline" colorScheme="teal">
                Logout
            </NavbarLink>
        </Flex>
    );
};

export default Navbar;
