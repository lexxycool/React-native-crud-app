import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center'

    },
    keyboard: {
        flex: 1,
        width: '100%'
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: 'center',
        margin: 30

    },
    input: {
        height: 48,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',   
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16

    },
})