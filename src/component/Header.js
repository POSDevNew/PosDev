import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../contacts/thems'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 80,
        backgroundColor:COLORS.primary,
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        color: '#ffffff',
        fontSize: 24,
        flex:1,
    }
})