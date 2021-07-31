import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles =  StyleSheet.create({
    container:{
        width:48,
        height:48,
        backgroundColor: theme.colors.secondary40,
        borderRadius:8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginTop:4,
        textAlign: 'center'
    },
})