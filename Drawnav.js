import React, { use, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import Dashboard from './src/screens/Dashboard';
import Logout from "./src/screens/Logout";
// import Wishlist from '../screens/wishlist';
// import History from '../screens/history';
import {Platform,Alert,Button, TouchableOpacity, View, Text, Settings, StyleSheet} from 'react-native';
 import Login from "./src/screens/Login"
const Drawer = createDrawerNavigator();
import  Settinggs from './src/screens/Settinggs';
import { heightValue, widthValue } from './styles';
 
const DrawNav= () => {
 
  
 

   
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <TouchableOpacity>
//           <Text>Logout</Text>
//         </TouchableOpacity>
//         {/* <Button title="Alert" onPress={()=>Alert.alert("alert ","invalid ",
// [
//   {
//     text: "Logout",
//     onPress: () => console.log("Logged out"),
//   },
 
// ])}
// /> */}
//       </View>
//     );
  
  const drawerIcon = ({focused, size},name) => {
    return (
      <Feather
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };
  return (
    
     <Drawer.Navigator
     drawerContent={(props)=>(
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
              
            
              <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                  <Feather name="user" size={80} color="#00bfff" />
                </View>
                <Text style={styles.consumerText}>Consumer ID : 4999806</Text>
       
                <TouchableOpacity style={styles.rechargeBtn}>
                  <Text style={styles.rechargeText}>Recharge</Text>
                </TouchableOpacity>
              </View>
       
              
              <View style={{ marginTop: 10 }}>
                <DrawerItemList {...props} />
              </View>
            </DrawerContentScrollView>

     )}
      drawerType="slide"
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: "#20243aff",
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '70%',
        },
      sceneStyle:{
         backgroundColor: Colors.bg,
      }
       
      }}>
        
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: options => drawerIcon(options, 'home'),headerShown:false
        }}
      />
      {/* {/* <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerIcon: options => drawerIcon(options, 'heart-outline'),
        }}
      /> */}
      <Drawer.Screen
        name="Settings"
        component={Settinggs}
        options={{
          drawerIcon: options => drawerIcon(options, 'settings'),headerShown:false
        }}
      /> 
      {/* <Drawer.Screen
        name="Live Data"
        component={ProfileScreen}
        options={{
          drawerIcon: options => drawerIcon(options, 'history'),
        }} */}
      {/* />  */}
      {/* <Drawer.Screen
        name="Notification"
        component={DetailsScreen}
        options={{
          drawerIcon: options => drawerIcon(options, 'history'),headerShown:false
        }}
      />  */}
      <Drawer.Screen
        name="Logout"
        component={Logout}
 options={{
         drawerIcon: options => drawerIcon(options, 'smartphone'),headerShown:false
       }}
        
      
      /> 
    </Drawer.Navigator>
  );
};
 
export default DrawNav;
 
const Colors = {
  bg: "#262E41",
  active: '#eee',
  inactive: '#eee',
  transparent: 'transparent',
};
const styles = StyleSheet.create({
  profileContainer: {
  
    alignItems: 'center',
    paddingVertical: 30,
  
   
  },
  avatarContainer: {
    borderRadius: 40,
    marginBottom: 10,
  },
  consumerText: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 10,
  },
  rechargeBtn: {
    backgroundColor: '#48b775',
   height:heightValue(20),
   width:widthValue(2),
    borderRadius: 25,
    alignItems:"center",justifyContent:"center"
  },
  rechargeText: {
  
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  },
})