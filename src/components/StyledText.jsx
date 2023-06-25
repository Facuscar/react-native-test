import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { theme } from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  textCenter: {
    textAlign: 'center'
  }
})

const StyledText = ({ children, align, color, fontSize, fontWeight, style, ...props }) => {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold
  ]

  return (
    <Text style={textStyles} {...props}>{children}</Text>
  )
}

export default StyledText
