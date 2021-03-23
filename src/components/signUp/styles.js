import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },
    form: {
        paddingTop: 20,
    },
    createSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    infoText: {
        fontSize: 17,

    },
    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16
    }
});