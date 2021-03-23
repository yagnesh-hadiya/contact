import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/common/button';
import Container from '../../components/common/container';
import Input from '../../components/common/input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')} />

            <View>
                <Text style={styles.title}>Welcome to RnContacts</Text>
                <Text style={styles.subTitle}>Please Login here</Text>
                <View style={styles.form}>
                    <Input lable='UserName'
                        iconPosition="right"
                        placeholder='Enter Username'
                    />
                    <Input lable='Password'
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder='Enter Password'
                        secureTextEntry={true}
                    />
                    <Button primary title='Submit' />
                    
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER) }}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}
export default Login;