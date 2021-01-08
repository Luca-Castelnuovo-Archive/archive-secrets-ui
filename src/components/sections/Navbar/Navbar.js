import { Flex, Spacer } from '@chakra-ui/react';
import NavbarItem from './NavbarItem';

const Navbar = () => (
    <Flex as="nav" mb={8}>
        {/* When on movile flex the entries below each other */}

        <NavbarItem
            to="/create_store"
            variant="solid"
            colorScheme="teal"
            borderWidth={1}
            boxShadow="lg"
        >
            {/* TODO: https://chakra-ui.com/docs/overlay/drawer#focus-on-specific-element */}
            Create Store
        </NavbarItem>

        <Spacer />

        <NavbarItem to="/docs" variant="outline" colorScheme="teal">
            Documentation
        </NavbarItem>

        <Spacer />

        <NavbarItem isLast to="/" variant="outline" colorScheme="teal">
            Logout
        </NavbarItem>
    </Flex>
);

export default Navbar;
