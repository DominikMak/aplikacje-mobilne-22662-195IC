import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import RestParam from './components/RestParam'
import SpreadOp from './components/SpreadOp'
import UseState from './components/UseState'


const Stack = createStackNavigator();

function App() {
  return (
    //app Navigation 
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
        title: 'Dominik Makuch 22662',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 20,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Strona Główna" component={Home} />

        <Stack.Screen options={{
        title: 'Spread Operator',
        headerStyle: {
          backgroundColor: '#bf381b',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Spread Operator" component={SpreadOp} />

         <Stack.Screen options={{
        title: 'Rest Parameters',
        headerStyle: {
          backgroundColor: '#bf391b',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="Rest Parameters" component={RestParam} />
      
         <Stack.Screen options={{
        title: 'useState',
        headerStyle: {
          backgroundColor: '#bf491b',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 25,
          textAlign: 'center',
          color: 'white'
        }
      }}
      name="useState" component={UseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;