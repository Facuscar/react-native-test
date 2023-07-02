import React from 'react'
import { View } from 'react-native'

import StyledText from './StyledText'

const RepositoryStats = ({ repo }) => {
  const parseThousands = value => {
    return value >= 1000
      ? `${Math.round(value / 100) / 10}k`
      : String(value)
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
        <StyledText>{parseThousands(repo.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText>{parseThousands(repo.forksCount)}</StyledText>
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

export default RepositoryStats
