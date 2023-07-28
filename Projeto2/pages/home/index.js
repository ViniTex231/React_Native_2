import {Ionicons} from '@expo/vector-icons'
import React, {useState} from 'react'
import {View, Text, TextInput, Image, Button, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Home(){
  const [valor, setValor] = useState(0)
  const [olho, setOlho] = useState(true)

  return(
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.txt}>Vinícius</Text>
        <View>
          <Image source={require('../../assets/img.png')} style={{width:100, height:200}}/>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.txt2}>Login</Text>
          <View style={{padding:15}}>
            <TextInput
              placeholder='User'
              style={styles.caixa}
            />
          </View>
          <View style={{padding:15}}>
            <TextInput
              placeholder='Password'
              style={styles.caixa}
              secureTextEntry={olho}
            />
              <TouchableOpacity style={styles.icon} onPress={ () => setOlho(!olho) }>
                  <Ionicons name="eye" color="#FFF" size={25} />
              </TouchableOpacity>
          </View>
          <View>
            <Button
              title='Aumentar'
              onPress={()=>{setValor(valor+1)}}
            />

          </View>
          <View>
            <Button
              title='Resultado'
              onPress={()=>{console.log(valor)}}
            />

          </View>
      </View>
    </View>
  )
}

