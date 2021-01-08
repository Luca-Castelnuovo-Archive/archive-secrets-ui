import DefaultLayout from 'components/layouts/Default';
import LoginSection from 'components/sections/Login';
import FetchProvider from 'utils/FetchProvider';

const Login = () => (
    <FetchProvider>
        <DefaultLayout>
            <LoginSection />
        </DefaultLayout>
    </FetchProvider>
);

export default Login;
