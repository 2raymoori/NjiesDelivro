import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface level1HeadingProps {
  text: string;
}

const Level1Heading = ({text}:level1HeadingProps): React.ReactElement<level1HeadingProps> => {
  return (
    <View>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle:{
    fontWeight: "bold",
    fontSize:18,
  }
})
export default Level1Heading;