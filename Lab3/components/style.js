import { StyleSheet } from 'react-native';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#886F6F',
        justifyContent: 'center',
        flexGrow: 1
    },
    sort: {
        flex: 2,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    lazy: {
        flex: 3,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    step: {
        flex: 4,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexGrow: 1
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    button: {
        flex: 1,
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
        shadowColor: '#EEEEEE',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.5,
        elevation: 7
    }
});

styles.sort = StyleSheet.create({
    sort: {
        flex: 2,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    description: {
        flex: 3,
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 80,
        elevation: 7,
        shadowColor: '#EEEEEE',
    },
    options: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    numbers: {
        flex: 5,
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    text: {
        color: '#EEEEEE',
        fontSize: 22,
        textAlign: 'center'
    },
    optButton: {
        flex: 1,
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 35,
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    optText: {
        color: 'white',
        fontSize: 15
    },
    nrText: {
        color: 'white',
        marginTop: 5,
        margin: 5,
        fontSize: 20
    }
});

styles.lazy = StyleSheet.create({
    description: {
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 50
    },
    letters: {
        flex: 3,
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },
    letText: {
        color: 'white',
        marginTop: 5,
        margin: 5,
        fontSize: 20,
        textAlign: 'justify'
    }
});
styles.step = StyleSheet.create({
    description: {
        backgroundColor: '#C1A3A3',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 60
    },
    progress: {
        flex: 2
    },
    screen: {
        backgroundColor: '#C1A3A3',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        height: 350,
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        marginRight: 5,
        marginLeft: 5
    },
})

export default styles
