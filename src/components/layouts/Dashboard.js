import Default from './Default';
import Navbar from 'components/sections/Navbar';

const Dashboard = ({ children }) => (
    <Default>
        <Navbar />
        {children}
    </Default>
);

export default Dashboard;
