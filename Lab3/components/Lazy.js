import React, {Suspense} from 'react';
import { View, Text} from 'react-native';
import styles from './style'

const GenerateComponent = React.lazy(() => import('./Generate'));
export default function Lazy() {
    return (
      <View style={styles.home.container}>
        <View style ={styles.lazy.description}>
          <Text style={styles.sort.text}> Lazy loading - 500 letters</Text>
        </View>
        <View style={styles.lazy.letters}>
          <Suspense fallback={<Text style={styles.sort.text}>Loading..</Text>}>
            <GenerateComponent />
          </Suspense>
        </View>
      </View>
    );
}

