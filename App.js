import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[numero1, setNumero1]=useState(0)
  const[numero2, setNumero2]=useState(0)
  const[resultado, setResultado]=useState(0)
   
   
  const suma = ()=>{
    let sumatoria=(parseFloat(numero1)+parseFloat(numero2));
    setResultado(sumatoria);
  }
   
  const multi = ()=>{
    let multiplicacion=(parseFloat(numero1)*parseFloat(numero2));
    setResultado(multiplicacion);
  }
   
  const divi = ()=>{
    let divicion=(parseFloat(numero1)/parseFloat(numero2));
    setResultado(divicion);
  }
   
  const rest = ()=>{
    let resta=(parseFloat(numero1)-parseFloat(numero2));
    setResultado(resta);
  }
   
  const limpiar = ()=>{
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }
   
    return (
      <View style={styles.container}>
        <Text>Suma de numeros</Text>
        <Text>Numero 1:</Text>
        <TextInput placeholder='Numero 1: ' value={numero1} onChangeText={setNumero1}/>
   
        <Text>Numero 2:</Text>
        <TextInput placeholder='Numero 2: ' value={numero2} onChangeText={setNumero2}/>
   
        <TouchableOpacity style={{backgroundColor: 'cyan', padding:5}} onPress={suma}>
        <Text style={{color: '#FFF',
          fontSize:20}}>Sumar numeros</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={{backgroundColor: 'pink', padding:5, marginTop:5}} onPress={multi}>    
        <Text style={{color: '#FFF',
          fontSize:20}}>Multiplicar numeros</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={{backgroundColor: 'cyan', padding:5,marginTop:5}} onPress={divi}>    
        <Text style={{color: '#ffff',
          fontSize:20}}>Dividir numeros</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={{backgroundColor: 'pink', padding:5, marginTop:5}} onPress={rest}>    
        <Text style={{color: '#ffff',
          fontSize:20}}>Resta numeros</Text>
        </TouchableOpacity>
       
        <Text style={{color: 'red', fontSize:30}}>Numero 1: {numero1}</Text>
        <Text style={{color: 'red', fontSize:30}}>Numero 2: {numero2}</Text>
        <Text style={{color: 'red', fontSize:30}}>Sumatoria: {resultado}</Text>
   
        <TouchableOpacity style={{backgroundColor: 'red',
         padding:5}}
         onPress={limpiar}
         >
          <Text style={{color: 'black',
          fontSize:20}}>Limpiar</Text>
        </TouchableOpacity>
   
       
   
       
       
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  