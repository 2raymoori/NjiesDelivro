/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  FlatList,
  Linking,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import OrderCard from './Components/OrderCard.tsx';
import { orderList } from './Utility/mockDB.ts';
import BagStackNavigator from './StkNavigation/BagStackNavigator.tsx';

function Bags() {
  const isDarkMode = useColorScheme() === 'dark';

  const openMaps = () => {
    const addrs: string = 'Havelwelle 1, 14471 Potsdam';
    const address = encodeURIComponent(addrs);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    Linking.openURL(url);
  };

  return (
      <BagStackNavigator />
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default Bags;


{
  /*
    <SafeAreaView style={styles.mapContainer}>
          <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: 52.521992,
            longitude: 13.413244,
            latitudeDelta: 0.0992,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
        />
        </SafeAreaView>
           */
}