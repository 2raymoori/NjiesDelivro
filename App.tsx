/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Linking, Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bags from './src/Bag.tsx';
import OrderADd from './src/OrderAdd.tsx';
import { NavigationContainer } from '@react-navigation/native';
import Account from './src/Account.tsx';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import Icon from '@react-native-vector-icons/fontawesome6';
import { Feather } from '@react-native-vector-icons/feather';
import MaterialIcons from '@react-native-vector-icons/material-icons';



function App() {
  const isDarkMode = useColorScheme() === 'dark';


  const openMaps = ()=>{
    const addrs:string = "Havelwelle 1, 14471 Potsdam"
    const address = encodeURIComponent(addrs)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;

    Linking.openURL(url);
  }

  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Feather name="shopping-bag" size={24} color="black" />
              ),
            }}
            name="Bag"
            component={Bags}
          />
          <Tab.Screen
            name="Add Orders"
            component={OrderADd}
            options={{
              tabBarIcon: () => (
                <MaterialIcons
                  name="add-circle"
                  size={28}
                  color="#E53935"
                />
              ),
            }}
          />
          <Tab.Screen
            name={'Account'}
            component={Account}
            options={{
              tabBarIcon: () => (
                <MaterialIcons
                  name="person-outline"
                  size={28}
                  color="#E53935"
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,

  },
});

export default App;





