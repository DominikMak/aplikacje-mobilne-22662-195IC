import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles'

export default function Home({navigation}) {
    return (
      <View style={styles.home.container}>
        <View style={styles.home.text}>
          <Text style={styles.home.lab}>Laboratorium 2</Text>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEOQBaEdxsGQEpcV_UiRuwVWcp66KHqgX0w&usqp=CAU'}} style={styles.home.img} />
        </View>
        <View style={styles.home.buttons}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest Parameters')}>
            <Text style={styles.home.btntext}>Rest Parameters</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState')}>
            <Text style={styles.home.btntext}>useState</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread Operator')}>
            <Text style={styles.home.btntext}>Spread Operator</Text>
        </TouchableOpacity >
        </View>
      </View>
    );
}
