import * as React from 'react';
import { ActivityIndicator, View, Text} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './style'

export default function StepOne({navigation}) {
    return (
      <View style={styles.home.container}>
        <View style={styles.step.description}>
          <Text style={styles.sort.text}> Step progress and ActivityIndicator example.</Text>
        </View>
        <View style={styles.step.progress}>
    <ProgressSteps 
      progressBarColor={'#F3c5c5'} 
      disabledStepIconColor={'#694e4e'} 
      labelColor={'#f3c5c5'} 
      completedLabelColor={'#eeeeee'}
      activeStepIconBorderColor={'#eeeeee'}
      completedProgressBarColor={'#eeeeee'}
      completedStepIconColor={'#eeeeee'}
      completedCheckColor={'#886F6F'}
      activeLabelColor={'#eeeeee'}
      labelFontSize={18}
    >
        <ProgressStep 
        label={'First step'} 
        nextBtnText={'Second step'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}>
          {/*Ekran 1*/}
            <View style={styles.step.screen}>
              <Text style={styles.step.text}>ActivityIndicator changes color!</Text>
                <ActivityIndicator color='white' size='large'/>
            </View>
        </ProgressStep>

        <ProgressStep 
        label="Second step"
        nextBtnText={'Third step'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        previousBtnText={'First step'}
        previousBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        previousBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        >
           {/*Ekran 2*/}
            <View style={styles.step.screen}>
              <Text style={styles.step.text}>ActivityIndicator changes color and size :O</Text>
            <ActivityIndicator color='#5677a3' size='small' />
            </View>
        </ProgressStep>

        <ProgressStep 
        label="Third step"
        finishBtnText={'Homepage'}
        nextBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        nextBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        previousBtnText={'Second step'}
        previousBtnStyle={{
          backgroundColor: '#abb6c4', 
          textAlign: 'center', 
          borderRadius: 10
        }}
        previousBtnTextStyle={{
          color: 'white', 
          fontSize: 20
        }}
        onSubmit={() => navigation.push('home')}
        >
            <View style={styles.step.screen}>
            <Text style={styles.step.text}>ActivityIndicator changes color and size (BIG ONE!).</Text>
            <ActivityIndicator style={{transform: [{scale: 3}]}} color='#c9dcf5' size='large' />
            </View>

        </ProgressStep>
    </ProgressSteps>
</View>
      </View>
    );
}