import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    keyboard: {
        flex: 1,
        width: '100%',
        
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
        borderRadius: 5,
        backgroundColor: 'white',
        overflow: 'hidden',
        marginTop: 10,
        marginBottom:  10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16

    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20

    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'

    },
    footerLink: {
        color: '#788eec',
        fontWeight: 'bold',
        fontSize: 16

    }

})