import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../../store/auth-context';
import AuthenticatedStack from './AuthenticatedStack';
import AuthStack from './AuthStack';
function Navigation() {
    const { isAuthenticate } = useContext(AuthContext);
  
    return (
      <NavigationContainer>
        {isAuthenticate ? <AuthenticatedStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }

export default Navigation