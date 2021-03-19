import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';

const AppNavContainer = () => {
    const isLoggedIn = false;
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
export default AppNavContainer;