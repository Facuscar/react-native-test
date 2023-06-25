import React from 'react'
import { View, StyleSheet } from 'react-native'

import StyledText from './StyledText'

const RepositoryStats = ({ repo }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
        <StyledText>{repo.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText>{repo.forksCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
        <StyledText>{repo.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
        <StyledText>{repo.ratingAverage}</StyledText>
      </View>
    </View>
  )
}

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
      <RepositoryStats repo={repo} />
    </View>
  )
}
export default RepositoryItem
