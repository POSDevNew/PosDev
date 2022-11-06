import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../contacts/thems'
import { Header, RegButton } from '../component'


const HomeScreen = () => {
  const handleOnPress = () => {
    console.log("Clicking")
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ height: 100 }}></View>
      <RegButton lable={"Login"} handleOnPress={ handleOnPress } />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: COLORS.backgroung,
  }
})