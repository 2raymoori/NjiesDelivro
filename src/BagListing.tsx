import { FlatList, Pressable, Text, View } from 'react-native';
import { orderList } from './Utility/mockDB.ts';
import OrderCard from './Components/OrderCard.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

const BagListing = (props) => {
  const onCardNavigate = (inputOrder)=>{
      props.navigation.navigate('bagDetail',{orderDetail:inputOrder});
  }
  return (
    <SafeAreaView>
      <FlatList
        data={orderList}
        renderItem={({ item }) => (
          <Pressable onPress={()=>{onCardNavigate(item.order);}}>
            <OrderCard
              name={item.order.customer.name}
              address={item.order.customer.address}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

export default BagListing