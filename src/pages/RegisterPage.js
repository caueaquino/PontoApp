import React from 'react';
import { View } from 'react-native';

import Register from '../components/Register';

const RegisterPage = (props) => {
  return (    
    <View>
      <Register backRoute={() => props.navigation.goBack()} />
    </View>
  );
};

export default RegisterPage;
