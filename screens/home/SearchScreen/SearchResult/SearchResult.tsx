import * as React from 'react'

import { View } from 'react-native'
import { ResultTitle, TouchableContainer, Image, Container, Type, TextContainer } from './styles'
import { } from '@styles'
import { iSearchResult } from '@lib'

export interface Props {
  searchResult: iSearchResult
  onPress: Function
}

export const SearchResult = ({ searchResult, onPress }: Props) => (
  <TouchableContainer onPress={() => onPress(searchResult)}>
    <Container>
      <Image source={{ uri: searchResult.image }} />
      <TextContainer>
        <Type>{searchResult.type}</Type>
        <ResultTitle>{searchResult.title}</ResultTitle>
      </TextContainer>
    </Container>
  </TouchableContainer>
)
