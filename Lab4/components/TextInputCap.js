import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from '../styles'

const TextInputCap = () => {
    return (
        <View style={{padding: 10}}>
            <Text>
                Wpisz tekst
            </Text>
            <TextInput
                style={styles.txtInput}
                placeholder='Wpisz przykładowy tekst'
                placeholderTextColor='#034f84'
            />
            <Text>
                Automatycznie wielka litera
            </Text>
            <TextInput
                style={styles.txtInput}
                autoCapitalize='words'
            />
            <Text>
                Default tekst
            </Text>
            <TextInput
                style={styles.txtInput}
                defaultValue={'Deafault text value'}
            />
            <Text>
                Default tekst nieedytowalny
            </Text>
            <TextInput
                style={styles.txtInput}
                defaultValue={'Deafault text value'}
                editable={false}
            />
            <Text>
                Numeryczna klawiatura
            </Text>
            <TextInput
                style={styles.txtInput}
                keyboardType='numeric'
            />
            <Text>
                Align center
            </Text>
            <TextInput
                style={styles.txtInput}
                textAlign='center'
            />
            <Text>
                Podkreślenie
            </Text>
            <TextInput
                style={styles.txtInput}
                underlineColorAndroid={'#034f84'}
            />
        </View>
    )
}

export default TextInputCap;