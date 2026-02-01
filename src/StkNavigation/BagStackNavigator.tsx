import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BagListing from '../BagListing.tsx';
import BagDetail from '../BagDetail.tsx';
const StackNavigator = createNativeStackNavigator();
const BagStackNavigator = ()=>{
  return (

      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name={'bagListing'} component={BagListing} />
        <StackNavigator.Screen name={'bagDetail'} component={BagDetail} />
      </StackNavigator.Navigator>

  );
}
export default BagStackNavigator