import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View>
            <Text>
                First picker
            </Text>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="First value" value="first" />
                <Picker.Item label="Second value" value="second" />
            </Picker>
            <Text>
                Second picker
            </Text>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="First value" value="first" />
                <Picker.Item label="Second value" value="second" />
            </Picker>
        </View>
    )
}

export default Select;