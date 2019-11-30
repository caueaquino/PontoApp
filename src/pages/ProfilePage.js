import React from 'react';
import { View } from 'react-native';

import Profile from '../components/Profile';

const ProfilePage = (props) => {
  return (
    <View>
      <Profile 
        openDrawer={() => {props.navigation.openDrawer();}}
        goBack={() => {props.navigation.goBack();}}
      />
    </View>
  );
}

export default ProfilePage;
