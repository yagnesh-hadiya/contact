import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../common/button';
import Container from '../common/container';
import Input from '../common/input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const SignUp = ({ onSubmit, onChange, form, error, errors, loading }) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')} />

            <View>
                <Text style={styles.title}>Welcome to RnContacts</Text>
                <Text style={styles.subTitle}>Create a new account</Text>
                <View style={styles.form}>
                    <Input lable='UserName'
                        iconPosition="right"
                        placeholder='Enter Username'
                        error={errors.userName}
                        onChangeText={(value) => {
                            onChange({ name: 'userName', value })
                        }}
                    />

                    <Input lable='FirstName'
                        iconPosition="right"
                        placeholder='Enter FirstName'
                        onChangeText={(value) => {
                            onChange({ name: 'firstName', value })
                        }}
                        error={errors.firstName}
                    />
                    <Input lable='LastName'
                        iconPosition="right"
                        placeholder='Enter LastName'
                        error={errors.lastName}
                        onChangeText={(value) => {
                            onChange({ name: 'lastName', value })
                        }}
                    />
                    <Input lable='Email'
                        iconPosition="right"
                        placeholder='Enter Email'
                        error={errors.email}
                        onChangeText={(value) => {
                            onChange({ name: 'email', value })
                        }}
                    />
                    <Input lable='Password'
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder='Enter Password'
                        secureTextEntry={true}
                        error={errors.password}
                        onChangeText={(value) => {
                            onChange({ name: 'password', value })
                        }}
                    />
                     
                     {console.log('error',error)}
                    <Button primary title='Submit' onPress={onSubmit} loading={loading} disabled={loading} />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
}
export default SignUp;