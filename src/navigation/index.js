import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import { globalContext } from '../context/provider';

const AppNavContainer = () => {
    const {authState : { isLoggedIn } } = useContext(globalContext);
    console.log(isLoggedIn);

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
export default AppNavContainer;