import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { registerAccount } from '../store'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [fullname, setFullname] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [showpasswordConfirm, setShowPasswordConfirm] = useState(false)
    const hasErrorEmail = () => !email.includes('@') && email.length > 0
    const hasErrorPass = () => !pass.length < 6 && pass.length > 0
    const hasErrorFullName = () => fullname == ''
    const hasErrorPassConfirm = () => passwordConfirm != pass
    const icons = ['eye', 'eye-off'];
    const [currentIcon, setCurrentIcon] = useState(icons[0]);
    useEffect(() => {
        setCurrentIcon(showPass ? icons[1] : icons[0]);
    }, [showPass, icons]);
    const handleIconPress = () => {
        setShowPass(prevIsSecure => !prevIsSecure);
    };

    const handleRegister = () => {
        console.log(email);
        const userData = {
          fullname: fullname,
          email: email,
          pass: pass,
        };
        registerAccount(userData);
        navigation.goBack();
      };
      const isDisabled =
        hasErrorFullName() ||
        hasErrorEmail() ||
        hasErrorPass() ||
        hasErrorPassConfirm();

    return (

        <View style={{ marginTop:50, padding: 10, justifyContent: 'center', alignContent: 'center' }}>
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

                label={"Full Name"}
                value={fullname}
                onChangeText={setFullname}
                mode='outlined'
            />
             <HelperText type='error' visible={hasErrorFullName()}>
                Sai định dạng 
            </HelperText>
            <TextInput
                label={"PassWord"}
                value={pass}
                onChangeText={setPass}
                secureTextEntry={!showPass}
                right={<TextInput.Icon icon={currentIcon} onPress={handleIconPress} />}
                mode='outlined'
            />
            <HelperText type='error' visible={hasErrorPass()}>
                Sai PassWord
            </HelperText>

            <TextInput
                label={"Password Again"}
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                secureTextEntry={!showpasswordConfirm}
                right={<TextInput.Icon icon={currentIcon} onPress={handleIconPress} />}
                mode='outlined'
            />
            <HelperText type='error' visible={hasErrorPass()}>
                Sai PassWord
            </HelperText>

            <Button
                mode='contained-tonal'
                buttonColor='pink'
                
                style={{
                    margin: 10,
                    padding: 5
                }}
                labelStyle={{
                    fontSize: 20
                }}
                onPress={handleRegister}

                disabled={isDisabled}
            >
                Register
            </Button>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Back to page
                </Text>
                <Button onPress={() => navigation.navigate("Login")}>
                    Login
                </Button>

            </View>
        </View>
    )
}

export default Register