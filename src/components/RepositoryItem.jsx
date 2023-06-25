import React from 'react'
import { View, StyleSheet } from 'react-native'

import StyledText from './StyledText'

const RepositoryItem = ({ repo }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5
    }
  })

  return (
    <View key={repo.id} style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>{repo.fullName}</StyledText>
      <StyledText>{repo.description}</StyledText>
      <StyledText>{repo.language}</StyledText>
      <StyledText>Stars: {repo.stargazersCount}</StyledText>
      <StyledText>Forks: {repo.forksCount}</StyledText>
      <StyledText>Rating: {repo.ratingAverage}</StyledText>
    </View>
  )
}
export default RepositoryItem
