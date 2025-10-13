import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { View, Text } from 'react-native';
import  Feather from 'react-native-vector-icons/Feather';
import Login from './src/screens/Login'
 
function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard Screen</Text>
    </View>
  );
}
 
function LiveDataScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Live Data Screen</Text>
    </View>
  );
}
 
 const Drawer = createDrawerNavigator();
 
export default function AppStack() {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide"
        drawerContent = {(props) => <CustomDrawer{...props}/>}
        screenOptions={{
          
          drawerLabelStyle: { backgroundColor: '#1f2940', width: 260 },
        }}
      >
      <Drawer.Screen
  name="Dashboard"
  component={DashboardScreen}
  options={{
    drawerLabel: 'Dashboard',
    drawerIcon: ({  size }) => (
      <Feather name="home" size={size} color="#fff" />
    ),
    drawerLabelStyle: { color: '#fff', marginLeft: -10 },
  }}
/>
 
<Drawer.Screen
  name="Login"
  component={Login}
  options={{
    drawerLabel: 'Live Data',
    drawerIcon: ({  size }) => (
      <Feather name="activity" size={size} color="#fff" />
    ),
    drawerLabelStyle: { color: '#fff', marginLeft: -10 },
  }}
/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}