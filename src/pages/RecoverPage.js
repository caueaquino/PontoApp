import React from 'react';
import { View } from 'react-native';

import Recover from '../components/Recover';

const RegisterPage = (props) => {
  return (
    
    <View>
      <Recover backRoute={() => props.navigation.goBack()} />
    </View>
  );
};

export default RegisterPage;
