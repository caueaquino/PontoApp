import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/MainPage';
import ProfilePage from './src/pages/ProfilePage';
import RegisterPage from './src/pages/RegisterPage';
import RecoverPage from './src/pages/RecoverPage';

const App = createAppContainer(
    createStackNavigator({
        Login: LoginPage,
        Main: MainPage,
        Profile: ProfilePage,
        Register: RegisterPage,
        Recover: RecoverPage,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    })
);

export default App;