import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';

import PontoPage from './PontoPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';

const MainPage = createAppContainer(
  createDrawerNavigator({
    Ponto: PontoPage,
    Perfil: ProfilePage,
    Sobre: AboutPage,
    Logout: LoginPage
  },
  {
    initialRouteName: 'Ponto',
    style:{
        backgroundColor: '#A0B9D9'
    },
    contentOptions: {
        activeTintColor: '#F2E205',
        inactiveTintColor: 'white',
        labelStyle: {
            fontSize: 30,
        }
    }
  })
);

export default MainPage;
