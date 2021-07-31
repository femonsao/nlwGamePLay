import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles =  StyleSheet.create({
    container:{
        width:"100%",
        height:95,
        backgroundColor: theme.colors.secondary40,
        borderRadius:8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginTop:4,
        borderWidth:1,
        borderBottomColor: theme.colors.secondary50,
        paddingTop:16,
        paddingHorizontal: 16,
        textAlignVertical: 'top'
    },
})