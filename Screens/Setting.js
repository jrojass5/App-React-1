import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
export default function setting() {
 

  
  return (
    <View style={styles.maincontainer}>

      <Text style={styles.title}>Setting</Text>
      <Text>This is another text element.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
  },
  title:{
    fontSize: 50,
    marginBottom: 20,
    justifyContent:'start',
    fontWeight: 'bold',
  },
 
});