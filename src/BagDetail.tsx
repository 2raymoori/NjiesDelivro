import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Level1Heading from './Components/Level1Heading.tsx';

const BagDetail = (props) => {
  console.log(props)
  return (
    <SafeAreaView style={{paddingHorizontal:10}}>
      <View style={{flexDirection: 'row',alignItems:"center",justifyContent:"space-between"}}>
        <Pressable onPress={()=>{props.navigation.goBack();}}>
          <MaterialIcons name={'arrow-circle-left'} size={40} color={'black'} />
        </Pressable>
        <View style={styles.row1}>
          <MaterialIcons name={'receipt-long'} size={10} />
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{props.route.params.orderDetail.orderId}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 7,
          marginBottom: 20,

        }}
      >
        <View style={styles.row1}>
          <MaterialIcons name={'receipt-long'} size={10} />
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Paid</Text>
        </View>
        <View style={{ ...styles.row1, backgroundColor: '#8080ff' }}>
          <MaterialIcons name={'access-time'} size={10} color={'white'} />
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>
            18:15
          </Text>
        </View>
      </View>

      <View>
        <Level1Heading text={props.route.params.orderDetail.customer.name} />
        <Text
          style={{
            textDecorationLine: 'underline',
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          {props.route.params.orderDetail.customer.address}
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <MaterialIcons name={'shopping-bag'} size={25} />
          <Text>Bag Items</Text>
        </View>
        <View
          style={{ backgroundColor: '#d1e0e0', padding: 10, borderRadius: 15 }}
        >
          {props.route.params.orderDetail.items.map(item => {
            return (
              <View
                style={{ flexDirection: 'row', marginVertical: 5, gap: 10 }}
                key={item.itemId}
              >
                <Text>{item.quantity}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  row1: {
    backgroundColor: '#edb009',
    flexDirection: 'row',
    alignItems: 'center',
    gap:2,
    padding:5,
    borderRadius:5,
  },
});


export default BagDetail;
