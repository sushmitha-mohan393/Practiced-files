import React from 'react';
import { View, Text, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createDrawerNavigator} from '@react-navigation/drawer';
import Login from "./Login";
import CustomDrawer from "./CustomDrawer"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Draw=createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>📄 Details Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>👤 Profile Screen</Text>
    </View>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
// export default function App() 
// {
//   return (
//     <NavigationContainer>
//     <Draw.Navigator drawerContent={props=> <CustomDrawer {...props}/>}>
//       <Draw.Screen name="Dashboard" component={DetailsScreen}/>
//       <Draw.Screen name="Settings" component={ProfileScreen}/>
//     </Draw.Navigator>
//     </NavigationContainer>
//   )
// }


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' ,headerShown:false,tabBarIcon:()=><Feather name="home" size={25} />}} />
      <Tab.Screen name="Profile" component={MyDraw} options={{ title: 'Profile',headerShown:false ,tabBarIcon:()=><Feather name="user"  size={25} />}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
      
      
    </NavigationContainer>
  );
}

