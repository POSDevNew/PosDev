import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import { COLORS } from '../contacts/thems'

const HomeScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.backgroung}}>
      <Header/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})