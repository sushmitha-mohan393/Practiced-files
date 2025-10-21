import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
export default function Settinggs({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
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
          <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Settings</Text>
          <SectionList
          sections={groupedData}
           keyExtractor={(item, index) => item.id + index}
          renderItem={({item})=>{
            return(
            <View style={styles.card}>
              <View style={{borderRadius:50,backgroundColor:"#31ac68ff",padding:10}}>
               <Feather name={item.iconName} size={24} color="white"/>
               </View>
<View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
               <View>
            <Text style={{fontSize:18}}> {item.name1}<Text style={{color:"green"}}>{item.name2}</Text></Text>
            <Text style={{color:"#979292ff" }}> {item.des}</Text>
            </View>
            <View>
            <Feather name="chevron-right" color="#cac8c8ff" size={24}   />
            </View>
            </View>
           </View>
            
            );

          }}
          renderSectionHeader={({section:{title1,title2}})=>{
            return(
          <View style={{flexDirection:"row" }}>
           
             <Text style={[styles.section,{marginLeft:20}]}>{title1}</Text>
             <Text style={[styles.section,{color:"green"}]}>{title2}</Text>
            </View>
          )
        
           
          }} 
          // SectionSeparatorComponent={<View style={{height:10}}/>}
          />

          </ScrollView>
         </DrawerSceneWrapper>
          )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
 section:{
  fontSize:20,marginTop:10,fontWeight:400,marginBottom:10
 },
    card:{
      
      flexDirection:"row",borderColor:"transparent",gap:10,borderWidth:2,width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(13),margin:20,marginTop:0,borderRadius:10,padding:10

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
    })