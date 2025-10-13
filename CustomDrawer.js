
 import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
 
export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#1f2940' }}>
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
 
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Feather  name="settings-outline" size={18} color="#fff" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#1f2940',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2d3a54',
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
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  rechargeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#2d3a54',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 15,
  },
});