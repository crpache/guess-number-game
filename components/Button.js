import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../constants/theme'

const Button = ({ 
  children, 
  onPress = () => null, 
  type = 'primary', 
  style, 
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{...styles.container(type), ...style}}>
      <Text style={styles.text(type)}>{children}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  text: type => ({
    color: type === 'secondary' ? colors.primary : colors.white,
    fontSize: 16,
  })
})

export default Button
