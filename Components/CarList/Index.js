import React from 'react'
import { View,Text,FlatList,Dimensions } from 'react-native'
import styles from './Styles'
import cars from './Cars'
import CarItem from '../CarItem/Index'

export default function Index() {
  return (
    <View style={styles.x}>
        <FlatList
            data={cars}
            renderItem={({item})=> <CarItem image={item.image} price={item.tagline} name={item.name}/>}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
        />

    </View>
      )
}
