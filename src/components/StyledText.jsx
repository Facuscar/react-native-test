import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'grey'
  },
  bold: {
    fontWeight: 'bold'
  },
  blue: {
    color: 'blue'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  }
})

const StyledText = ({ bold, blue, big, small, children }) => {
  console.log('Is this bold?', bold)
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small
  ]

  return (
    <Text style={textStyles}>{children}</Text>
  )
}

export default StyledText