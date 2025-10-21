import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { heightValue, widthValue } from "../../styles";
// import Logout from "./Logout";

const OnboardingScreen = () => {
  const navigation=useNavigation();
  const handleDone=()=>
  {
    navigation.navigate("Login");
  }
  const donebutn=({...props})=>{
    return(
      <TouchableOpacity {...props} >
       <Text style={{color:"green",fontSize:20,marginRight:20,fontWeight:600}}>Done</Text>
      </TouchableOpacity>
    )
  }
  const skip=({...props})=>{
    return(
      <TouchableOpacity {...props} >
       <Text style={{color:"green",fontSize:20,marginLeft:20,fontWeight:600}}>Login</Text>
      </TouchableOpacity>
    )
  }
  const next=({...props})=>{
    return(
      <TouchableOpacity {...props} >
       <Text style={{color:"green",fontSize:20,marginRight:20,fontWeight:600}}>Next</Text>
      </TouchableOpacity>
    )
  }
  const CustomDot = ({ selected }) => {
  return (
    <View
      style={
        
        {
            width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
          backgroundColor: selected ? "green" : 'white',
          
        }
      }
    />
  );
};
  return (
   
    <Onboarding
    onSkip={handleDone}
    onDone={handleDone}
    skipLabel={["Login",styles.skip]}
    DoneButtonComponent ={donebutn}
    SkipButtonComponent={skip}
    NextButtonComponent={next}
    DotComponent={CustomDot}
      pages={[
        {
          backgroundColor: "#111113",
         image: (
          <View >
             <View style={styles.titleContainer}>
              <Text style={styles.stepNumber}>01</Text>
              <Text style={styles.titleText}>Know your</Text>
              <Text style={styles.subtitleText}>CONSUMPTION</Text>
            </View>
             <LottieView source={require("../assets/fx1zf8DjP4 (1).json") }autoPlay loop  style={styles.imageContainer}/>
             <Text style={styles.description}>
            Solving your issues before they turn into a problem,is a real luxury.Keep a track of your consumptions on your finger tips.
            </Text>
            </View>
          ),
          title: '',
          subtitle:'',
          
        },
     
        {
          backgroundColor: "#111113",
           
          
           image: (
          <View >
            <View style={styles.titleContainer}>
              <Text style={styles.stepNumber}>02</Text>
              <Text style={styles.titleText}>Pay your</Text>
              <Text style={styles.subtitleText}>BILLS ONLINE</Text>
            </View>
             <LottieView source={require("../assets/Oq5mh0IAq0.json") }autoPlay loop  style={styles.imageContainer}/>
             <Text style={styles.description}>
              Avoid Penalty for late payments no more, Prepaid or Postpaid – Pay
              your bills on time!
            </Text>
            </View>
          ),
          title:'',subtitle:''
         
  
         
        },
      ]}
    />
  );
};
 
export default OnboardingScreen;
 
const styles = StyleSheet.create({
  imageContainer: {
    width:widthValue(1),
   height:heightValue(2.1)
    
  },
 
 
  
  titleContainer: {
    alignItems: "flex-start",
    marginHorizontal:40
  },
  stepNumber: {
    fontSize: 80,
    color: "#59C36A",
    fontWeight: "700",

  },
  titleText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "500",
   
  },
  subtitleText: {
    fontSize: 35,
    color: "#59C36A",
    fontWeight: "700",
  },
  description: {
    color: "#fff",
  marginHorizontal:40,
    fontSize: 18,
    lineHeight: 25,
  marginBottom:-40
  },
  skip:{
    color:"green",fontSize:20,fontWeight:600
  }
});
 