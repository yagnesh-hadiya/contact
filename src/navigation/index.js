import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import { globalContext } from '../context/provider';

const AppNavContainer = () => {
    const {contactsState : { getContacts } } = useContext(globalContext);
    console.log(getContacts);
    const isLoggedIn = true
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
export default AppNavContainer;