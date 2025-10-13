import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput, Platform} from 'react-native';
import  Compo1 from "./src/components/Compo1.jsx";
import Box from "./src/components/Box.jsx";
import Input from "./src/components/Input.jsx"
const imag=require('./src/assets/virat1.jpg');
// import Onboard from "./src/screens/Onboard"
import OnboardingScreen from './src/screens/Onboard.js'
import Login from "./src/screens/Login.jsx";
import Dashboard from "./src/screens/Dashboard.js"
import Nav from './Nav.js'
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from "./CustomDrawer.js";
import DrawNav from "./Drawnav.js";
import Settinggs from "./src/screens/Settinggs.js";
import Logout from "./src/screens/Logout.js";
import AppStack from "./AppStack.js"

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// import MyEChart from "./src/components/Echart.js"
const Draw=createDrawerNavigator();
const Stack= createNativeStackNavigator();
function HomeStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
       <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}}/>
       {/* <Draw.Screen name="drawer" component={DrawNav}  options={{headerShown:false}}/> */}
       <Stack.Screen name="Settings" component={Settinggs} options={{headerShown:false}}/>
       <Stack.Screen name="Logout" component={Logout} options={{headerShown:false}}/>
       <Stack.Screen name="Nav" component={Nav} options={{headerShown:false}}/>
       {/* <Draw.Screen name="Nav" component={DrawNav} options={{headerShown:false}}/> */}
      
      
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

function App({}) {
  //   const [name, setName] = useState('');
  // const[isModalVisible,setIsModalVisible]=useState(false);

  return (

    <View style={{flex:1}}>
     
      {/* <MyEChart/> */}
  <HomeStack />
       
        {/* <Nav /> */}
    </View>
    // <Onboard />
//    <View style={styles.container}>
//   <Text> Hello WORLD</Text>
// <Image source={imag} />
// <ImageBackground source={{uri:"https://picsum.photos/200"}} style={{width:100,height:100,margin:10}}>
// <Text style={{color:"white"}}> What is this image </Text>
// </ImageBackground>
// {/* <ScrollView>
// <Text>
// Adapted from "The Colors of Animals" by Sir John Lubbock in A Book of Natural History (1902, ed. David Starr Jordan).The color of animals is by no means a matter of chance; it depends on many considerations, but in the majority of cases tends to protect the animal from danger by rendering it less conspicuous. Perhaps it may be said that if coloring is mainly protective, there ought to be but few brightly colored animals. There are, however, not a few cases in which vivid colors are themselves protective. The kingfisher itself, though so brightly colored, is by no means easy to see. The blue harmonizes with the water, and the bird as it darts along the stream looks almost like a flash of sunlight.Desert animals are generally the color of the desert. Thus, for instance, the lion, the antelope, and the wild donkey are all sand-colored. “Indeed,” says Canon Tristram, “in the desert, where neither trees, brushwood, nor even undulation of the surface afford the slightest protection to its foes, a modification of color assimilated to that of the surrounding country is absolutely necessary. Hence, without exception, the upper plumage of every bird, and also the fur of all the smaller mammals and the skin of all the snakes and lizards, is of one uniform sand color.The next point is the color of the mature caterpillars, some of which are brown. This probably makes the caterpillar even more conspicuous among the green leaves than would otherwise be the case. Let us see, then, whether the habits of the insect will throw any light upon the riddle. What would you do if you were a big caterpillar? Why, like most other defenseless creatures, you would feed by night, and lie concealed by day. So do these caterpillars. When the morning light comes, they creep down the stem of the food plant, and lie concealed among the thick herbage and dry sticks and leaves, near the ground, and it is obvious that under such circumstances the brown color really becomes a protection. It might indeed be argued that the caterpillars, having become brown, concealed themselves on the ground, and that we were reversing the state of things. But this is not so, because, while we may say as a general rule that large caterpillars feed by night and lie concealed by day, it is by no means always the case that they are brown; some of them still retaining the green color. We may then conclude that the habit of concealing themselves by day came first, and that the brown color is a later adaptation.</Text>
// </ScrollView> */}
// <Button
//   title="Press"
//   onPress={() => setIsModalVisible(true)}
//   color="midnightblue"
//   disabled={false}
// />
// <Button title="Alert" onPress={()=>Alert.alert("alert ","invalid ",
// [
//   {
//     text: "Cancel",
//     onPress: () => console.log("Cancel pressed"),
//   },
//   {
//     text: "OK",
//     onPress: () => console.log("OK pressed"),
//   }
// ])}
// />
//  <View >
//       <Button
//         title="Basic Button"
//         onPress={() => console.log('Basic button pressed!')}
        
//         color="#841584" // Changes background color on iOS and text color on Android
//       />
//     </View>
// <Modal
//   visible={isModalVisible}
//   onRequestClose={() => setIsModalVisible(false)}
//   animationType="slide"
//   presentationStyle="pageSheet"
// >
//   <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
//     <ActivityIndicator size="large" color="blue"/>
//     <Text>Modal content</Text>
//     <Button
//       title="Close"
//       color="midnightblue"
//       onPress={() => setIsModalVisible(false)}
//     />
//   </View>
// </Modal>
// <Compo1 name="Sush"/>
  
  
//   <View style={styles.box}>
  
//     <Box style={{backgroundColor:"plum"}}>Box 1</Box>
//     <Box style={{backgroundColor:"blue"}}>Box 2</Box>
//     <Box style={{backgroundColor:"pink"}}>Box 3</Box>
   

//   </View>


// <Input/>




//    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding:10,
    margin:10
  },
  box:{
    // flex:1,
    // flexDirection:"row",
    height:100,
    flexDirection:"column",
   flexWrap:"wrap-reverse",
   borderWidth:6,
   borderColor:"red"
  }

})

export default App;
