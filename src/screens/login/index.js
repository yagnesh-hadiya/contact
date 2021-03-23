import React, { useState } from 'react';
import { Text } from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/common/input';

const Login = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <Container>
            <Input lable='UserName'
                onChangeText={(text) => onChangeText(text)}
                value={value}
                iconPosition="right"
                error={'This field is required.'}
            />
            <Input lable='Password'
                onChangeText={(text) => onChangeText(text)}
                value={value}
                icon={<Text>Hide</Text>}
                iconPosition="left"
                
            />
        </Container>
    );
}
export default Login;