/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
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
} from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function Bags() {
  const isDarkMode = useColorScheme() === 'dark';

  const openMaps = () => {
    const addrs: string = 'Havelwelle 1, 14471 Potsdam';
    const address = encodeURIComponent(addrs);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;

    Linking.openURL(url);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1 }}>
        <Text>sdfs</Text>
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
        <Pressable onPress={openMaps}>
          <Text style={{ color: 'blue' }}>Berlin, Germany</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});

export default Bags;
