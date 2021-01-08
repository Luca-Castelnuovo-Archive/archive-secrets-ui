import PropTypes from 'prop-types';
import { Link } from 'wouter';
import { Text, Button } from '@chakra-ui/react';

const NavbarLink = ({ children, isLast, to = '/', ...rest }) => {
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

NavbarLink.propTypes = {
    children: PropTypes.node.isRequired,
    isLast: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default NavbarLink;
