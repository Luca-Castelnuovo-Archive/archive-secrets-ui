import PropTypes from 'prop-types';
import { Link } from 'wouter';
import { Text, Button } from '@chakra-ui/react';

const NavbarItem = ({ children, isLast, to = '/', ...rest }) => {
    return (
        <Text mr={{ base: isLast ? 0 : 2 }} display="block">
            <Link to={to}>
                <Button size="md" rounded="md" {...rest}>
                    {children}
                </Button>
            </Link>
        </Text>
    );
};

NavbarItem.propTypes = {
    children: PropTypes.node.isRequired,
    isLast: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default NavbarItem;
