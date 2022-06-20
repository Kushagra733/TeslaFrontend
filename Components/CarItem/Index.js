import React from 'react'
import { View,Text,ImageBackground } from 'react-native'
import styles from './Style'
import Button from '../Button/Index'
import Logo from '../Logo/Index'
export default function Index(props) {
  return (
    <View style={styles.carContainer}>

    <ImageBackground source={props.image}
    style={styles.image}
    />

      <View style = {styles.titles}>
      <Text style={styles.title}>
        {props.name}
      </Text>
      <Text style={styles.subtitle}>
        {props.price}
      </Text>

      </View>

      <View style={styles.buttonContainer}>
        <Button/>
      </View>

  </View>
  )
}

