import React from 'react'
import { View,Text,Pressable } from 'react-native'
import styles from './Style'

export default function Index() {
  return (
    <View style={styles.container}>
        <Pressable
        style={styles.button}
        onPress={()=>{console.warn('pressed')}}
        >
            <Text style={styles.text}>Custom Order</Text>
        </Pressable>
    </View>
  )
}
