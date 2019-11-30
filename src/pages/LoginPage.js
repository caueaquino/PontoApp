import React from 'react';
import { View } from 'react-native';

import Login from '../components/Login';

const LoginPage = (props) => {
  return (
    <View>
      <Login 
        mainRoute={() => props.navigation.navigate('Main')}
        registerRoute={() => props.navigation.navigate('Register')} 
        recoverRoute={() => props.navigation.navigate('Recover')}
      />
    </View>
  );
};

export default LoginPage;
