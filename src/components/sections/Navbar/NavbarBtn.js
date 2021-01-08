import PropTypes from 'prop-types';
import { Text, Button } from '@chakra-ui/react';

const NavbarBtn = ({ children, isLast, onClick, ...rest }) => {
    return (
        <Text mr={{ base: isLast ? 0 : 2 }} display="block">
            <Button size="md" rounded="md" onClick={onClick} {...rest}>
                {children}
            </Button>
        </Text>
    );
};

NavbarBtn.propTypes = {
    children: PropTypes.node.isRequired,
    isLast: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default NavbarBtn;
