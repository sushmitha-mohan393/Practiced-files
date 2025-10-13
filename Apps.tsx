import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,StatusBar} from 'react-native';
import Cards from "./src/components/Cards";

const img=require("./src/assets/logo.webp");

import Feather from 'react-native-vector-icons/Feather';
function Apps() {
    const smart={
        name:"Smart Meter - 1 Phase 2 Wire",
    image:require("./src/assets/smart.webp"),
    type:"E350/SM110 (1P2W Smart Meter)",
descrip:"1 Phase Whole Current Smart Energy Meter with Import-Export Energy Measurement",
features:["Smart meter"]
};
const grid={
      name:"Digital Grid Analyzer-Gridjet",
    image:require("./src/assets/grid.webp"),
    type:"ES-DGA-E101C",
descrip:"Distribution Substation Monitoring System",
features:["Grid Analyser"]

};
const mbus={
      name:"IoT Gateway - MBus (Bulk) ",
    image:require("./src/assets/Mbus.webp"),
    type:"ES3020 - M-Bus (Bulk) Battery Powered ",
descrip:"Bulk MBus gateway can connect to 1 Type of protocol Meter (1 Water): MBus</p>",
features:["Gas","Communication Gateway","Water"]

};
const iot={
      name:"IoT Gateway - DLMS +WMBus",
    image:require("./src/assets/iotgate.webp"),
    type:"ES3020 - DLMS+Wireless MBus (DLMS+ Wireless MBus 1:M)",
descrip:"DLMS + Wireless M-Bus gateway can connect to 2 Types of protocol Meters (1 Electricity &amp; 1 Water)",
features:["Iot Gateway","Communication Gateway","Water","Electricity"]

};
    

    return( 
        <View style={styles.container}>
           <StatusBar backgroundColor="green" barStyle="dark-content"/>  
           <View style={{flexDirection:"row",justifyContent:"space-between",padding:15,paddingBottom:0}}>
         <Image source={img} style={{width:80,height:30}}/>

  <Feather name="menu" color="#000" size={25} />

        </View>
        <Text style={{fontFamily:"Roboto",fontSize:20,marginLeft:15,marginTop:5,fontWeight:"bold"}}>Iot Products</Text>
       <Cards {...smart}/>
       <Cards {...grid}/>
       <Cards {...iot}/>
       <Cards {...mbus}/>

         
        </View>

    );}
    const styles=StyleSheet.create(
        {
            container:{
           backgroundColor:"white",flex:1,padding:10,paddingTop:10
            }

        }
    );
    export default Apps;