import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, CONTACT_LIST, SETTINGS, CREATE_CONTACT } from '../constants/routeNames';
import Contacts from '../screens/contacts';
import ContactDetail from '../screens/contactDetail';
import CreateContact from '../screens/createContact';
import Settings from '../screens/settings';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={CONTACT_LIST}>
            <Stack.Screen name={CONTACT_LIST} component={Contacts} />
            <Stack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <Stack.Screen name={SETTINGS} component={Settings} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;