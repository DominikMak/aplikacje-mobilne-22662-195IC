import * as React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import styles from './style'

export default function Scroll1() {
    const animals = `
    - zające
    - lisy
    - borsuki
    - jelenie
    - sarny
    - dziki
    - łosie
    - wilki
    - kuny 
    - żubry
    - sowy
    - dzięcioły
  `
    return (
      <View style={styles.scroll.container}>
          <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Scroll view 1</Text>
          </View>
          <View style={styles.scroll.back}>
          <ScrollView persistentScrollbar={true}>
              <View style={styles.scroll.scbox}>
                  <Image style={{height:'100%', borderRadius: 10}} source={{uri: 'https://picsum.photos/200/200'}}></Image>
              </View>
              <View style={[styles.scroll.scbox, {flexDirection: 'row', backgroundColor: '#90c28c'}]}>
                  <View style={{flex:1}}>
                    <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Zwierzęta występujące w polskich lasach:</Text>
                      <ScrollView persistentScrollbar={true}>
                          <Text style={styles.scroll.text1}>{animals}</Text>
                      </ScrollView>
                  </View>
                  <View style={{flex:1, borderRadius: 10}}>
                  <Image style={{height:'80%', borderRadius: 10, marginTop: 20, marginLeft: 10, marginRight: 10}} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                  </View>
              </View>
              <View style={styles.scroll.scbox}>
                  <View style={{flex:1}}>
                      <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Przykładowe zdjęcia lasu:</Text>
                  </View>
                  <View style={{flex:5}}>
                      <ScrollView persistentScrollbar={true} style={{marginLeft: 10, marginRight: 10}}>
                      <Image style={styles.scroll.image} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                      <Image style={styles.scroll.image} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                      </ScrollView>
                  </View>
              </View>
          </ScrollView>
          </View>
          
      </View>
    );
}