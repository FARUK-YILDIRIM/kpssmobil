import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import Home from './screens/Home';
import Caro from './screens/Caro';

function HomeScreen({navigation}) {
  return <Home navigation={navigation} />;
}

function CaroScreen({navigation, route}) {
  return <Caro navigation={navigation} route={route} />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-book'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Caro') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Caro" component={CaroScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
