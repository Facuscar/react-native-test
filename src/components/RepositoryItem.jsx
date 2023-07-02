import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import { theme } from '../theme'

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
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    margin: 'auto',
    borderRadius: 4
  },
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  subheadingContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    paddingRight: 10
  }
})

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={styles.headerContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={styles.subheadingContainer}>
      <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
      <StyledText>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = ({ repo }) => (
  <View key={repo.id} style={styles.container}>
    <RepositoryItemHeader
      ownerAvatarUrl={repo.ownerAvatarUrl}
      fullName={repo.fullName}
      description={repo.description}
      language={repo.language}
    />
    <RepositoryStats repo={repo} />
  </View>
)
export default RepositoryItem
