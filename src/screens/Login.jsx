import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";


function Login() { 
  const navigation = useNavigation();
    const [activeView, setActiveView] = useState(null); // 'view1' or 'view2'

  
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
      const[errors,setErrors]=useState({});
      const[showPassword,setShowPassword]=useState(false);
const [activeField, setActiveField] = useState(null);
  const [loading, setLoading] = useState(false);
 
       const handleLogin = () => {
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
         
         navigation.navigate("Nav")
      }, 1500); 
    }
  };
              const activeError =
    activeField === "username"
      ? errors.username
      : activeField === "password"
      ? errors.password
      : null;
      

  const validate = () => {
    let newErrors = {};

    // Consumer ID validation
     if (username.trim().length < 5)
      newErrors.username = "Consumer ID must be at least 5 characters.";

    // Password validation
  
    if (!password) newErrors.password = "Password is required.";
    
  else if (password.length === 0) {
        newErrors.password="Password is required";

    } 

 else if(password.length<8)
         {
          newErrors.password="Password must be at least 8 characters";
         } 
    else if (!(password.match(/(?=.*\d)/)))
         {
        newErrors.password="Password must at least contain one digit";
       
    }
    else if(!password.match(/(?=.*[a-z])/))
    {
      newErrors.password="Password must at least contain one lowercase character";
        
    }
    else if(!password.match(/(?=.*[A-Z])/))
    {
      newErrors.password= "Password must at least contain one uppercase character";
    }
       
    else if(!password.match(/(?=.*[@$!%*?&])/))
    {
         newErrors.password="Password must at least contain one special character";
      
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handlePress = (viewName) => {
    setActiveView(viewName);
  };
    return(
         <ScrollView style={styles.container}>

          <Image source={require('../assets/images/AGCLLogo.png')} style={styles.images} /> 
        <Text style={styles.title}>UDDIPTA</Text>
        <View style={{width:widthValue(3),height:heightValue(30),backgroundColor:"green",marginHorizontal:"auto",borderRadius:30,marginTop:20}}> </View>
        <View style={{width:widthValue(2),height:heightValue(30),backgroundColor:"#33d65cff",marginHorizontal:"auto",borderRadius:40,marginTop:-15}}> </View>
        <View style={{width:widthValue(1.3),height:heightValue(3.5),backgroundColor:"#262E41",marginHorizontal:"auto",borderRadius:30,marginTop:-15}}>
            <Text style={{fontSize:30,marginHorizontal:30,marginTop:15,color:"white"}}>Log <Text style={{color:"green"}}>In</Text></Text>
           <View style={[styles.input ,activeView === 'view1' && styles.activeView]} >
                <Text style={{color:"#b7b1b1ff"}}>CONSUMER ID</Text>
           <TextInput  style={{color:"white"}} value={username}  onChangeText={(text) => {
                setUsername(text);
                validate();
              }} onFocus={() => setActiveField("username")}
              onBlur={() => setActiveField(null)}  onPress={() => handlePress('view1')}/>
           <View style={styles.line}></View></View>
            <View style={[styles.input,activeView === 'view2' && styles.activeView ]} >
                <Text style={{color:"#b7b1b1ff"}}>PASSWORD</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>

           <TextInput secureTextEntry={!showPassword}  value={password} onChangeText={(text) => {
                setPassword(text);
                validate();
              }}  onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField(null)} style={[{flex:1,color:"white"}]}
              onPress={() => handlePress('view2')}/> 
          
 <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ paddingHorizontal: 5 }}
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                color="#b7b1b1ff"
                size={22}
              />
            </TouchableOpacity>
           </View>
           <View style={styles.line}></View>
            </View>
          
  
            </View>
            {activeError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{activeError}</Text>
        </View>
      )}
<TouchableOpacity
  onPress={handleLogin}
  disabled={loading}
  
  style={[
    styles.login,
    { backgroundColor: loading ? "green" : "#3d3d53ff" }, 
  ]}
  
>
  {loading ? (
    
      
      <Text style={{ color: "white", fontSize:15}}>
        Logging in<ActivityIndicator   center color="white" />
      </Text>
    
  ) : (
    <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
      Login
    </Text>
  )}
</TouchableOpacity>

      <Text style={[styles.text,{fontSize:20}]}>Recharge instantly with <Text style={{color:"#33d65cff"}}>QuickPay</Text></Text>
      <Text style={[styles.text,{fontSize:18}]}>Dont have an account ? <Text style={{color:"#33d65cff"}}>Sign Up</Text></Text>
      <Text style={{color:"#33d65cff",margin:10,marginHorizontal:"auto",fontSize:15}}>Forgot Password?</Text>
      <View style={styles.power}>
      <Text style={{marginTop:3}} >Powered by</Text><Image source={require('../assets/logo.webp')} style={{width:100,height:30}} /></View><Text style={{marginHorizontal:"auto"}}>AGCL v1.0</Text>
       
         </ScrollView>


    )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding:10,
    margin:10,
    // alignContent:"center",
    // justifyContent:"center"
  },
  images:{
    width:150,
    height:150,
    marginHorizontal:"auto",
    marginTop:20
   
  },
  title:{
    color:"green",
    marginHorizontal:"auto",fontSize:25,fontWeight:400
  },
  login:{
   backgroundColor:"#262E41",width:100,height:45,marginHorizontal:"auto",marginTop:40,alignItems:"center",justifyContent:"center",borderRadius:50
  },
  text:{margin:10,marginBottom:0,marginHorizontal:"auto"},
  power:{
    flexDirection:"row",justifyContent:"center",marginTop:50
  },
 
  line: {
    borderBottomColor: '#33d65cff', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    width:widthValue(1.6), 
    marginVertical:-5, 
 
  },
  input:{
    marginHorizontal:15,
    marginTop:10,
    marginBottom:10,
    padding:12,
   
  },  activeView: {
    backgroundColor: '#3B4053', 
   borderRadius:10
  },
   errorContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginVertical: 2,
    textAlign: "center",
    width: "85%",
  },
  logging:{
    backgroundColor:"green"
  }
})
export default Login;

