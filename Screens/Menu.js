import React, { useState } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image,Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Options() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const content = [
    <Text style={{ fontSize: 30, justifyContent:'start',fontWeight: 'bold',padding: 20,}}>Menú</Text>,
    <View style={styles.UserDate}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocK__2V_FtSB9bs8STGivBU5SRdRoYqWf5ezRI0Qoj0eh94DtrUA=s288-c-no'}}
            style={styles.profilePicture}/>
            <View style={styles.UserInfo}>
            <Text style={styles.TextInfoName}>Jefferson Rojas</Text>
            <Text style={styles.TextInfo}>Auxiliar almacen (Almacen Enem)</Text>
            </View>
            <AntDesign name="right" size={14} color="black" />
    </View>,
    <View key="public1" style={styles.public}>
         <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>,
    <TouchableOpacity key="button" style={styles.containerbutton}>
    <Text >Sign off</Text>
  </TouchableOpacity>,
  ];
  return (
    <View style={{  flex:1,}}>
      <ScrollView  style={styles.scrollView}> 
      {content}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerbutton: {
    marginTop:10,  
    marginBottom:30,  
    backgroundColor:'white',
    height: 50,
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
  },
  scrollView: {
    flex:1,
    padding: 20,
  },
  UserDate:{
    marginTop:10,  
    backgroundColor:'white',
    borderRadius: 20,
    height: 80,
    alignItems:"center",
    flexDirection: 'row',
    justifyContent:'space-around',  
  },
  TextInfoName:{
   fontSize: 20,
   fontWeight: 'bold',
  },
  profilePicture:{
    height:70,
    width: 70,
    borderRadius: 50,
  },
  public:{
    marginTop:10,  
    backgroundColor:'white',
    height: 50,
    borderRadius: 20,
  },
 
});