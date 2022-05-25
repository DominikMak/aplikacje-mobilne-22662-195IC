import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from './style'

export default function Swipe() {
  const notHere = <Text style={[styles.scroll.text, {marginTop: 30}]}>Nie tutaj!</Text>;
  const change = <Text style={[styles.scroll.text, {marginTop: 30}]}>Odznaczono</Text>;

  const [symbol, setSymbol] = React.useState('×')
  const [symbol2, setSymbol2] = React.useState('×')

  const swiped = () => {
    setSymbol('✓')
  }
  const swiped2 = (symb) => {
    setSymbol2(symb)
  }

const rightButtons = [
<Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
<Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
];

const rightButtonsv2 = [
  <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
  <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
  ];

  const rightButtonsv3 = [
    <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
    <Image style={{height:80, width: 80}} source={{uri: 'https://picsum.photos/200/200'}}></Image>,
    ];

    return (
      <View style={styles.scroll.container}>
          <View style={styles.scroll.explain}>
              <Text style={styles.scroll.text}>Przykład użycia komponentu Swipeable</Text>
          </View>
          <Swipeable style={styles.scroll.swipe} rightButtons={rightButtons} leftContent={change} 
          leftActionActivationDistance={20} onLeftActionRelease={() => swiped2('×')} onRightActionRelease={() => swiped2('✓')}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>{symbol2} Random 1</Text>
            </Swipeable>
            <Swipeable style={[styles.scroll.swipe, {backgroundColor: '#90c28c'}]} leftContent={notHere} rightButtons={rightButtonsv2}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>Random 2</Text>
            </Swipeable>
            <Swipeable style={styles.scroll.swipe} rightButtons={rightButtonsv3} onRightActionRelease={swiped}>
            <Text style={[styles.scroll.text, {marginTop: 30}]}>{symbol} Random 3</Text>
            </Swipeable>
      </View>
    );
}