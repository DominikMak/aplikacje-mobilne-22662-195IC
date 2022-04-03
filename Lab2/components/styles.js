import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#f57862',
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center'
    },
    lab: {
        marginTop: '10%',
        fontSize: 20,
        color: '#fff',
        marginBottom: 30
    },
    buttons:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 5
    },
    button: {
        backgroundColor: 'yellow',
        borderColor: '#fff',
        borderWidth: 0.4,
        borderRadius: 4,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 3,
        paddingRight: 3,
        marginLeft: 5,
        marginTop: 10,
    },
    btntext: {
        color:'green'
    },
    img: {
        height: 255,
        width: 300,
        marginTop: 10
    }

});

styles.rest = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'lightblue',
        flexDirection: 'row'
    },
    buttons:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50%',
    },
    text: {
        flex: 2,
    },
    op: {
        flex: 1,
    },
    ex: {
        flex: 2,
    },
    optxt: {
        color: '#fff',
        marginTop: '10%',
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'justify'
    },
    extxt1: {
        color: 'green',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5
    },
    extxt2: {
        color: 'lightgreen',
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        borderWidth: 0.2,
        borderRadius: 3,
        borderColor: '#c7777e'
    }
});

styles.state = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'brown',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    descr: {
        flex: 5,
        flexDirection: 'column',
    },
    text: {
        flex: 1,
    },
    ex: {
        flex: 2
        
    }
});

styles.spread = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    top: {
        flex: 0,
        flexDirection: 'row',
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        flex: 1,
    },
    buttons: {
        flex: 2,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-end',
    }

});

export default styles