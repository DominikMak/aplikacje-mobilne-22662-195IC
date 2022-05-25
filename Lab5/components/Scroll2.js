import * as React from 'react';
import { ScrollView, View, Text, Image} from 'react-native';
import styles from './style'

export default function Scroll2() {
    return (
        <View style={styles.scroll.container}>
        <View style={styles.scroll.explain}>
            <Text style={[styles.scroll.text, {textAlign: 'center'}]}>Drugi przykład wykorzystania ScrollView z włączoną opcją horizontal</Text>
        </View>
        <View style={styles.scroll.back}>
        <ScrollView persistentScrollbar={true}>
            <View style={styles.scroll.scbox}>
                <View style={{flex:1}}>
                  <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Popularne kwiaty</Text>
                </View>
                  <View style={{flex:6}}>
                  <Image style={{height:'95%', borderRadius: 10, marginLeft: 10, marginRight: 10}} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                  </View>
            </View>
            <View style={[styles.scroll.scbox, { backgroundColor: '#90c28c', height: 140}]}>
                <View style={{flex:2}}>
                  <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Przykładowe zdjęcia</Text>
                  </View>
                  <View style={{flex:6}}>
                    <ScrollView persistentScrollbar={true} horizontal={true}>
                    <Image style={styles.scroll.image2} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                    <Image style={styles.scroll.image2} source={{uri: 'https://picsum.photos/200/200'}}></Image>
                    </ScrollView>
                  </View>
            </View>
            <View style={[styles.scroll.scbox, { backgroundColor: '#90c28c'}]}>
                  <View style={{flex:1}}>
                    <Text style={[styles.scroll.text1, {textAlign: 'center'}]}>Do najpopularniejszych kwiatów należą:</Text>
                  </View>
                  <View style={{flex:5}}>
                    <ScrollView persistentScrollbar={true}>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Róże</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Gerbery</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Tulipany</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Lilie</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Storczyki</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Irysy</Text>
                      </View>
                      <View style={styles.scroll.ex}>
                        <Text style={styles.scroll.text1}>Słoneczniki</Text>
                      </View>
                    </ScrollView>

                  </View>
            </View>
        </ScrollView>
        </View>
        
    </View>
    );
}