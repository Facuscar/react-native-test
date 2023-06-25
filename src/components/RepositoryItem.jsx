import React from 'react'
import { View, Text } from 'react-native'

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Id: {repo.id}</Text>
      <Text>Name: {repo.fullName}</Text>
      <Text>Description: {repo.description}</Text>
      <Text>Language: {repo.language}</Text>
      <Text>Stars: {repo.stargazersCount}</Text>
      <Text>Forks: {repo.forksCount}</Text>
      <Text>Rating: {repo.ratingAverage}</Text>
    </View>
  )
}
export default RepositoryItem
