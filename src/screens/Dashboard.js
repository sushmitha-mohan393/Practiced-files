import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard({navigation})
{ 
// const navigation = useNavigation();
     const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
    return(
      <DrawerSceneWrapper>
        <ScrollView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:5,marginTop:25}}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Icon name="menu" size={25} color="#666" />
            </TouchableOpacity>
              <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={30} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
            <Text style={{margin:20,marginTop:0,fontSize:18,fontWeight:300}}>Welcome to AGCL Smartgas</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:5}}>
            <Text style={{fontSize:20,}}><Text>4999806          </Text> 
            <AntDesign name="up" color="#000" size={15} style={{marginLeft:40}}/>
   </Text>
            <TouchableOpacity style={{backgroundColor:"green",width:widthValue(3),height:heightValue(25),borderRadius:10,alignContent:"center",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white",fontSize:15}}>Switch account</Text></TouchableOpacity>
        </View >
        
        <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(4.5),margin:20,marginTop:0,borderRadius:10}}>
<View style={{flexDirection:"row",justifyContent:"space-around",margin:20,marginHorizontal:-20,marginBottom:0}}>
<Text>Current Balance</Text>
<Text>Meter Connected</Text>
</View>
<Text style={{marginHorizontal:30,fontSize:40,color:"rgba(67, 190, 56, 1)"}}>₹ 3526.08</Text>
<TouchableOpacity style={{backgroundColor:"rgba(67, 190, 56, 1)",width:widthValue(3),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center",margin:"auto",marginTop:25}}><Text style={{color:"white",fontSize:15}}>Tap to Recharge</Text></TouchableOpacity>
<Text style={{margin:"auto",marginTop:1,fontSize:16}}>Last Recharge of ₹1.00 on 2025-09-08</Text>

        </View>
        <View style={{width:widthValue(1.1),backgroundColor:"#B2BFC8",height:heightValue(8),margin:20,marginTop:-10,borderRadius:10,padding:15,paddingTop:25}}>
             
             <AntDesign name="caretup" color="#000" size={23} />
             <AntDesign name="caretdown" color="#999797ff" size={23} />
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:-30}}> 
                <Text style={{marginHorizontal:100,fontSize:40,marginTop:-20,fontFamily:"Seven Segment"}}>0</Text>
               <Text> Total Vb M3</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
            <Text>Updated on 2025-08-06</Text>
            <Ionicons name="refresh-circle" color="rgba(67, 190, 56, 1)" size={24} />
  </View>
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(4.5),margin:20,marginTop:0,borderRadius:10,padding:10}}>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Monthly Consumption:</Text>
            <View style={styles.progress}/>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Last Month Consumption:</Text>
            <View style={styles.progress}/>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Monthly Forecast:</Text>
            <View style={styles.progress}/>
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(3),margin:20,marginTop:0,borderRadius:10,padding:20,flexDirection:"row",justifyContent:"space-around"}}>
<TouchableOpacity style={[
          styles.button,
          activeButton === 'button1' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button1')}><Text style={[styles.btntext,activeButton=="button1"&&styles.actbtn]}>Week</Text></TouchableOpacity>
<TouchableOpacity  style={[
          styles.button,
          activeButton === 'button2' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button2')}><Text style={[styles.btntext,activeButton=="button2"&&styles.actbtn]}>Month</Text></TouchableOpacity>

        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(9),margin:20,marginTop:0,borderRadius:10,padding:30,alignItems:"center"}}>
          <Text>Last Consumption 2025-05-24</Text>
          <Text style={{fontSize:20,color:"green"}}>0 M3</Text>
        </View>
        <Text style={{margin:"auto",marginBottom:heightValue(70)}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"green"}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
        
        
        </ScrollView>
         </DrawerSceneWrapper>
    )

}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  button:{
    backgroundColor:"rgba(67, 190, 56, 1)",width:widthValue(5),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center"

  },
     activeButton: {
    backgroundColor: "green", // Active color
   
  },
  inactiveButton: {
    backgroundColor: 'white',
    color:"black", // Inactive color
    borderColor: '#ccc',
  },btntext:{
    color:"black",fontSize:15
  },
  actbtn:{
    color:"white"
  },
     iconContainer: {
        position: 'relative',
        width: 30, 
        height: 30, 
      },
      badge: {
        position: 'absolute',
        top: -5, 
        right: -5, 
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
      },
progress:{marginHorizontal:20,height:heightValue(50),borderRadius:20,backgroundColor:"#d2d6dbff",marginBottom:10}
})