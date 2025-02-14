import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,  } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
//img
import BackImg from './assets/img/Kakashi.jpg';
import LogoGoogle from './assets/img/Google-icon-04.png';
import LogoFacebook from './assets/img/facebook-logo-facebook-icon-transparent-free-png.webp';

export default function App() {


  

  return (
    <View style={styles.container}>
      <Image source={BackImg} style ={styles.Logo}/>
      <View style = {styles.Seccion}>
      <TouchableOpacity style = {styles.BtnNumber} onPress={()=>{
        alert('Funciona')
      }}>
          <Text style = {styles.TextBtnNumber}>Continue with your mobile number</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.BtnGoogle}>
          <Image source={LogoGoogle} style={styles.LogoGoogle}/>
          <Text style = {styles.TextBtnGoogle}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.BtnFacebook}>
          <Image source={LogoFacebook} style={styles.LogoFacebook}/>
          <Text style = {styles.TextBtnFacebook}>Login with Google</Text>
        </TouchableOpacity>


        <View style={styles.ContentAccount}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
        <Text style = {styles.TextContent}>Sign in</Text>
        </TouchableOpacity>
        </View>


      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,

  },
  Logo: {

    height: 600,
    width: 360,

  },
  Seccion:{
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: 360,
    height: 400,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    boxShadow: '1px 1px 5px 5pxrgba(178, 177, 177, 0.79)',
    gap: 10,
    marginTop: 430


  },
  BtnNumber:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    width: 320,
    borderRadius: 30,
    backgroundColor: 'black',


  },
  TextBtnNumber: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginTop:12,

  },
  BtnGoogle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap:10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: 320,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  TextBtnGoogle:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginTop:12,
  },
  LogoGoogle:{
    height: 30,
    width: 30,
    marginTop:8,
  },
  BtnFacebook:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap:5,
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: 320,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  LogoFacebook:{
    height: 45,
    width: 45,
  },
  TextBtnFacebook:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginTop:12,
  },
  ContentAccount:{
    flexDirection: 'row',
    gap: 5,

  },
  TextContent:{
    color: '#219ebc',
    fontWeight: '600',
  }
})
