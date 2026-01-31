import { Text, View } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
const Account = () => {
  return (
    <View>
      <Text>Account Screen...</Text>
      <FontAwesome6
        name="circle-stop"
        color={'red'}
        size={100}
        iconStyle="solid"
      />
    </View>
  );
};

export default Account;