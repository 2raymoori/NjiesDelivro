import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Level1Heading from './Level1Heading.tsx';
import { Feather } from '@react-native-vector-icons/feather';
import { ReactElement } from 'react';


interface IOrderCardProps {
  address: string;
  name: string;

}
const OrderCard = ({address,name}:IOrderCardProps):ReactElement<IOrderCardProps>=>{
  const addressFragnemt:string[] = address.split(",")
  return (

      <View style={styles.cardContainer}>
        <View style={styles.subItems}>
          <View style={styles.subRows}>
            <MaterialIcons name="check-circle" size={28} color="green" />
            <View style={{ gap: 3 }}>
              <Text>
                <Level1Heading text={addressFragnemt[0]} />
              </Text>
              <Text>{addressFragnemt[1]}</Text>
            </View>
          </View>
          <View style={styles.subRows}>
            <MaterialIcons name="person" size={28} color="#E53935" />
            <Level1Heading text={name} />
          </View>
        </View>
        <View style={styles.subItems}>
          <Feather name={'arrow-right-circle'} size={48} color="#E53935" />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({


  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    inset: 1,
    backgroundColor: '#fff', // REQUIRED for shadow to show
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    // Android shadow
    elevation: 10,
  },
  subItems: {
    flexDirection: 'column',
    gap: 5,
  },
  subRows: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default OrderCard;