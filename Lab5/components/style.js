import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'grey'
    },
    button: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 90
    }
});

styles.scroll = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'white',
        flexGrow: 1
    },

    explain: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 60
    },
    text: {
        fontSize: 20,
        color: 'green',
        marginLeft: 5,
        marginRight: 5
    },
    text1: {
        fontSize: 17,
        color: 'green',
        marginTop: 3
    },
    example: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    },
    back: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginVertical: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 500
    },
    scbox: {
        flex: 1,
        backgroundColor: 'orange',
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    image: {
        height:160, 
        borderRadius: 10,
        marginBottom: 10
    },
    image2: {
        height: '100%', 
        width: 93
    },
    ex: {
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 35,
        marginBottom: 10
    },
    input: {
        borderColor: '#90c28c',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 17,
        width: 300,
        textAlign: 'center',
        color: '#746d7d'
    },
    swipe: {
        backgroundColor: '#82ad7f',
        height: 80,
        alignItems: 'stretch'
    }
})

export default styles