import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { login, useMyContextController } from '../store'
import { Button, HelperText, TextInput } from 'react-native-paper'

const Login = ({navigation}) => {
    const [email, setEmail] = useState("trancaoquocdung@gmail.com")
    const [pass, setPass] = useState("123456")
    const [showPass, setShowPass] = useState(false)
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller
    const hasErrorEmail = () => !email.includes('@')
    const hasErrorPass = () => !pass.length<6
    useEffect(() => {
      if (userLogin != null) {
        navigation.navigate('Home')
      }
    }, [userLogin]);
   
    const onSubmit =() =>{
      login(dispatch,email,pass);
    }
    const isDisabled = 
        hasErrorEmail() ||
        hasErrorPass() ;

  return (
    
    <View style={{flex:1,padding:10,justifyContent:'center',alignContent:'center'}}>
      
      <Image style={{width:150,height:150,alignSelf:'center'}}source={{uri:'https://miro.medium.com/max/600/1*R4c8lHBHuH5qyqOtZb3h-w.png'}}/>
      <TextInput

        label={"Email"}
        value={email}
        onChangeText={setEmail}
        mode='outlined'
      />
      <HelperText type='error' visible={hasErrorEmail()}>
        Sai mail
      </HelperText>
      <TextInput
        label={"PassWord"}
        value={pass}
        onChangeText={setPass}
        secureTextEntry ={!showPass}
        mode='outlined'
      />
      <HelperText type='error' visible={hasErrorPass()}>
        Sai PassWord
      </HelperText>

      <Button 
        mode='contained-tonal' 
        buttonColor='pink' 
        onPress={onSubmit}
        style={{
          margin:10,
          padding:5
        }}
        labelStyle={{
          fontSize:20
        }}
        >
        Login
      </Button>

      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text>
                Don't have account
            </Text>
            <Button onPress={() => navigation.navigate('Register')}   disabled={isDisabled}>
                create new account
            </Button>
        
      </View>
    </View>
  )
}

export default Login