import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
import Onboarding from "react-native-onboarding-swiper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Dos({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
    const CustomDot = ({ selected }) => {
    return (
      <View
        style={
          
          {
              width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 3,bottom:0,
            backgroundColor: selected ? "green" : 'white',
            
          }
        }
      />
    );
  };
    return(
      <DrawerSceneWrapper>
        <ScrollView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:0,marginTop:25}}>
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu" size={25} color="#666" />
            </TouchableOpacity>
              <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={30} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
           <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Do's &<Text style={{color:"green"}}>  Dont's</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(60),lineHeight:20}}>
            The following guidelines outline best practices and common pitfalls to avoid in the development and use of a UDDIPTA-AGCL consumer app.
           </Text>
           <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(2),margin:20,marginTop:heightValue(10),borderRadius:10}}>
            <Onboarding
               
               containerStyles={{
                top:-20,
         
          justifyContent: 'flex-start',
        
         
        
          
         
        }}
      
      
       
      pages={[
        {
          backgroundColor: 'white',
          image: (
            <View>
           <MaterialCommunityIcons name="check-circle" color="green" size={50} />
         </View>            
         
            
           
          ),title:(
            <View style={styles.textBox}>
              <Text  style={{color:"green",fontSize:20,marginBottom:10,marginTop:-30}}>Do's</Text>
              <Text style={styles.text}>✓ Open all doors and windows.</Text>
              <Text style={styles.text}>✓ Shut off your natural gas supply, if possible.</Text>
              <Text style={styles.text}>✓ Immediately call our Emergency Helpline Number.</Text>
              <Text style={styles.text}>✓ Do not Smoke.</Text>
            </View> 

          ), 
        },
       
        {
          backgroundColor: '#f9f5f5',
          image: (
            <View>
               <MaterialCommunityIcons name="close-circle" color="red" size={50} />
              </View>
          ),
          
       
          
          title: (
            <View style={styles.textBox}>
              <Text style={{color:"red",fontSize:20,marginBottom:10,marginTop:-30}}>Dont's</Text>
              <Text style={styles.text}>✗ Don’t operate any electrical switches.</Text>
              <Text style={styles.text}>✗ Don’t use mobile phones near gas leaks.</Text>
              <Text style={styles.text}>✗ Don’t light matches or lighters.</Text>
            </View>
          ),
         
        
        },
         
      ]}
    />
;
 

 
           </View>
          </ScrollView>
          </DrawerSceneWrapper>)
}
const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  iconsContainer:{
   padding:10,borderRadius:50,top:70
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
      text:{
        fontSize:18,
        lineHeight:30
        
      },
      textBox:{
   
   
       height:heightValue(2),
       width:widthValue(1.1),
      //  backgroundColor:'red',
       left:-10
      }
  
 

    })