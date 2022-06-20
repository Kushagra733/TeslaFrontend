import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './Style'

export default function Index() {
  return (

    <View style={styles.container}>

            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>

    </View>
  )
}
