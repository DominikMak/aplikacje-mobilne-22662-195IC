import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Sort from './components/Sort'
import Lazy from './components/Lazy'
import StepOne from './components/StepOne'


const Stack = createStackNavigator();

function App() {
  return (
    //do nawigacji
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
        title: 'Lab 3 - Dominik Makuch',
        headerStyle: {
          backgroundColor: '#694E4E',
        },
        headerTintColor: '#F3C5C5',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: '#F3C5C5',
        }
      }}
      name="home" component={Home} />

        <Stack.Screen options={{
        title: 'Random numbers sort',
        headerStyle: {
          backgroundColor: '#694E4E',
        },
        headerTintColor: '#F3C5C5',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: '#F3C5C5',
        }
      }}
      name="sort" component={Sort} />

         <Stack.Screen options={{
        title: 'Lazy loading',
        headerStyle: {
          backgroundColor: '#694E4E',
        },
        headerTintColor: '#F3C5C5',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: '#F3C5C5',
        }
      }}
      name="lazy" component={Lazy} />

         <Stack.Screen options={{
        title: 'Step progress',
        headerStyle: {
          backgroundColor: '#694E4E',
        },
        headerTintColor: '#F3C5C5',
        headerTitleStyle: {
          fontSize: 30,
          textAlign: 'center',
          color: '#F3C5C5',
        }
      }}
      name="step1" component={StepOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;