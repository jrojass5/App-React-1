import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, {Defs,LinearGradient as SVGLinearGradient,Stop,Rect,Circle,} from "react-native-svg";
import {StatusBar,StyleSheet,Text,View,TextInput,TouchableOpacity,Alert,} from 'react-native';
import {initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from 'firebase/database';
import Home from './Screens/Navigator';
import { AntDesign,FontAwesome5  } from '@expo/vector-icons';
const firebaseConfig = {
  apiKey: "AIzaSyBanmwgXut73Opx2xDkDtNuelwlR_byJjA",
  authDomain: "app-react-1-b128c.firebaseapp.com",
  databaseURL: "https://app-react-1-b128c-default-rtdb.firebaseio.com",
  projectId: "app-react-1-b128c",
  storageBucket: "app-react-1-b128c.appspot.com",
  messagingSenderId: "891876788685",
  appId: "1:891876788685:web:1d437e59121a03ae6e5c84",
  measurementId: "G-PCQPMZ7TT8"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default function App() {
const [Idinput, setId] = useState('');
const [password, setPassword] = useState('');
const [user, setUser]=useState([]);
const [error, setError]= useState(false);
async function handleLogin(){
    const userRef = ref(database, `10-7tBGtjhMt03_yCHRpXPgsoi-awR70H1duaHeukZb4/User/${Idinput}`)
    onValue(userRef, (snapshot) => { 
      if (Idinput==""|| password===""){
       setError(true)
       return
      }else{
        if (!snapshot.exists()) { 
          Alert.alert(
            "Documento no encontrado",
            "No se encontró un documento con la identificación proporcionada.",
            [{ text: "OK"},],
            { cancelable: false }
          );
          setError(false)
          return
        }
        const userData = snapshot.val();
        if(userData.Password==password){
          Alert.alert("inicio correctamente:","Se encontró un documento con la identificación proporcionada.",
            [{ text: "OK",},],
            { cancelable: false });
            setUser([Idinput]);
            setError(false);
            return
        }else{
          Alert.alert("Error","Incorrect password",[{ text: "OK"},],
            { cancelable: false }
          );
          setError(false)
          return
        }
      }
    });
}
const SvgComponent = (props) => (
  <Svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg">
    <Defs>
      <SVGLinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%">
        <Stop offset="30%" stopColor="#837fa2" />
        <Stop offset="100%" stopColor="#6c247c" />
      </SVGLinearGradient>
    </Defs>
    <Rect width="100%" height="100%" fill="url(#a)" />
    <Circle cx="50%" cy="50%" r='80' fill="#fff"/>
    <FontAwesome5 name="people-carry" size={70} color="black"style={{ alignSelf: 'center',marginTop:"20%" }} /> 
  </Svg>
)
const validatePassword = (text) => {
  const allowedChars = /^[0-9]+$/;
  if (!allowedChars.test(text)) {
  return text.slice(0, -1); 
  }
  return text;
};
return ( 
  <View style={styles.maincontainer}>
    {user.length > 0 ? 
    <Home user={user}/> 
    :<View style={styles.maincontainer}> 
    <View style={styles.svgcontainer}>
   <SvgComponent/>
   </View>
   <View style={styles.container}>
   <View style={styles.TexContainer}>
   <StatusBar style="auto"/>
   <Text  style={styles.hello}>Hello</Text>
   <Text  style={styles.title}>Sign in to your id</Text>
   </View>
   <View style={styles.inputContainer} onSubmit={handleLogin}>
     <TextInput
     style={styles.input}
     placeholder="Id"
     value={Idinput}
     onChangeText={(text) => setId(validatePassword(text))}
     />
   <TextInput
   style={styles.input}
   placeholder="Password"
   secureTextEntry
   value={password}
   onChangeText={(text) => setPassword(validatePassword(text))} 
   />
  </View>
  <TouchableOpacity  style={styles.containerbutton} onPress={handleLogin}>
  <LinearGradient style={styles.button} 
  colors={['#6c247c','#837fa2']}
  start={{x: 1, y:0}}
  end={{x:0,y:1}}
  >
  <Text style={styles.buttonText}>SIGN IN <AntDesign name="login" size={24} color="white" /></Text>
  </LinearGradient>
  </TouchableOpacity>
  {error && <Text  style={styles.error}>Todos los campos son obligatorios </Text>}
   </View>
   
    </View>
    }
  </View>
);
}
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
  },
  svgcontainer:{
    height:'30%',
    width:'100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  TexContainer:{
    width: '80%',
    alignItems:"center",
  },
  hello: {
    fontSize: 80,
    marginBottom: 20,
    fontWeight: 'bold',
  },  
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  containerbutton:{
    width:'40%',
    borderRadius: 50,
  },
  button: {
    alignItems:'center',
    width:'100%',
    borderRadius: 50,
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold',
  },
  error:{
    marginTop: 20,
    color: "#ac8cbc",
  }
});