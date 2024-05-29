import React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,Button } from 'react-native';
export default function Home() {
  const contentsd= [
    <View style={styles.public}>
          <View style={{flexDirection: 'row',alignItems:'center'}}>
                  <Image source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocK__2V_FtSB9bs8STGivBU5SRdRoYqWf5ezRI0Qoj0eh94DtrUA=s288-c-no'}}
                  style={{height:50, width: 50, borderRadius: 50, }}/>
                  <Text>Jefferson Rojas</Text>
          </View>
          <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/app-react-1-b128c.appspot.com/o/istockphoto-1368965646-612x612.jpg?alt=media&token=0858530e-a0b7-4ca6-b749-407cfc7e3416'}}
            style={styles.ElementPublic}/>
             <Text> No te pierdas reunoin de inidicadores</Text>
          <Text> Consulta hora y dia de la reunion</Text>
    </View>,
  ];
  const content= [
    <View key="carousel"style={styles.CarouselContainer}/>,
    contentsd,
    contentsd,
    contentsd,
  ];
  return (
    <View style={[styles.container,]}>
      <Text style={styles.title}>React App 1</Text>
      <ScrollView  style={styles.scrollView}> 
      {content}
      </ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container :{flex:1},
  title:{
    fontSize: 30,
    justifyContent:'start',
    fontWeight: 'bold',
    padding: 20,
  },
  scrollView: {
    flex:1,
  },
  CarouselContainer:{
    backgroundColor:'white',
    height: 200,
  },
  public:{
    marginTop:10,  
    backgroundColor:'white',
    height: 400,
  },
  ElementPublic:{
    marginTop:10, 
    backgroundColor:'black',
    height: 290, 
  }
  });