import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () =>{
  const [name, SetName] = useState("");
  const [edadI, setEdad] = useState(0);

  const validacion = () =>{
    let edad = edadI;

    if(name==""){
      Alert.alert("Put your name")
    } else{
      if(edad < 0 || edad%1!=0)
      {
        Alert.alert("Put only positive integer values")
      }else {
        if(edad<1||edad>99){
          Alert.alert("Only put values between 1 and 99")
        }else{
          let valor1
          let valor2
          if(edad<10){
            edad=edad*7
            while(edad>10){
              valor1 = Math.floor(edad/10)
              valor2 = edad%10
              edad=valor1+valor2
            }
            Alert.alert(edad.toString())
          }else{
            while(edad>10){
              valor1 = Math.floor(edad/10)
              valor2 = edad%10
              edad=valor1+valor2
            }
            Alert.alert(edad.toString())
          }
        }
      }
    }
  }

  return (
    <View style={styles.Body}>
      <Text style={styles.LuckyNumberText}>Lucky Number</Text>
      <Image source={require('./src/assets/love.png')} style={styles.Image}/>
      <TextInput
        style={styles.Input}
        placeholder="Enter your name"
        onChangeText={SetName}
      ></TextInput>


      <TextInput
        style={styles.Input}
        placeholder="Enter your age"
        keyboardType="numeric"
        onChangeText={setEdad}
      ></TextInput>

      <TouchableOpacity
        style={styles.Boton}
        onPress={validacion}
      >
        <Text style={styles.TextoBoton}>Get my number</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  Body:{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#444CA2'
  },
  LuckyNumberText:{
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: 'white'
  },
  Image:{
    width: 150,
    height: 130,
  },
  Input:{
    width: '50%',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 15,
    margin: 10,
    borderRadius: 5,
  },
  Boton:{
    width: '60%',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  TextoBoton:{
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: 'white'
  }
})