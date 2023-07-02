import React from 'react'
import { View, StyleSheet } from 'react-native'

import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import { theme } from '../theme'

const RepositoryItem = ({ repo }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5
    },
    language: {
      padding: 4,
      color: theme.colors.white,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-start',
      borderRadius: 4,
      overflow: 'hidden'
    }
  })

  return (
    <View key={repo.id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</StyledText>
      <StyledText>{repo.description}</StyledText>
      <StyledText style={styles.language}>{repo.language}</StyledText>
      <RepositoryStats repo={repo} />
    </View>
  )
}
export default RepositoryItem
