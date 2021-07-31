import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const style= StyleSheet.create({
    container:{
        flex:1
    },
    bannerContainr:{
        width: '100%',
        height:234,
        marginBottom:30
    },title:{
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },subtitle:{
        fontSize: 13,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },bannerContent:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:24,
        paddingBottom:30
    },  members:{
        marginLeft:24,
        marginTop:27
      },footer:{
          paddingHorizontal: 24,
          paddingVertical: 20,
          marginBottom: getBottomSpace(),
      },

});