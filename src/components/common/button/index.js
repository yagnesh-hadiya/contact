import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Button = ({ style, icon, onChangeText, error, value, lable, iconPosition, ...props }) => {

    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    };

    const getBorderColor = () => {
        if (focused) {
            return colors.primary;
        }
        if (error) {
            return colors.danger;
        } else {
            return colors.grey;
        }
    }

    return (
        <View style={styles.inputContainer}>
            {lable && <Text>{lable}</Text>}

            <View style={[styles.wrapper, { alignItems: icon ? 'center' : 'baseline', flexDirection: getFlexDirection(), borderColor: getBorderColor() }]}>
                <View>{icon && icon}</View>

                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => {
                        setFocused(true);
                    }}
                    onBlur={() => {
                        setFocused(false);

                    }}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}
export default Button;
