import React from 'react';
import { View, Text,StyleSheet,ScrollView} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
export default function Feed() {

    const post ={
      video: 'https://firebasestorage.googleapis.com/v0/b/app-react-1-b128c.appspot.com/o/Video%20de%20WhatsApp%202024-04-09%20a%20las%2011.50.54_c9aea90e.mp4?alt=media&token=69a357c2-128c-4459-8a58-029eb448fac1',

    };
  return (
        <View style={{flex: 1, }}>
            <Video style={[StyleSheet.absoluteFill]} 
            source={{uri:post.video}}
            resizeMode={ResizeMode.COVER}
            useNativeControls
            />
        
        </View>
      );
    }
    const styles = StyleSheet.create({
     
    });