import * as React from 'react'
import { Container, DefaultMessageText } from '@styles'
import {
  SearchContainer,
  InputContainer,
  SearchInput,
  PageTitle,
  SearchResultsScroll,
  SearchResultsContainer,
  ClearSearchButton,
  ClearSearchContainer,
  SearchIcon,
  ClearSearchIcon,
} from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { useFullTextSearch } from '@hooks'
import { SearchResult } from './SearchResult'
import { iSearchResult } from '@lib'

export const SearchScreen = () => {
  const navigation = useNavigation()
  const [query, setQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<iSearchResult[]>([])
  const queryFunction = useFullTextSearch()
  useEffect(() => {
    let results = []
    if (query.length > 2) {
      results = queryFunction(query)
    }
    setSearchResults(results)
  }, [query])
  return (
    <Container>
      <LinearGradient
        colors={['rgba(0, 0, 0, .7)', 'rgba(0, 0, 0, 1)']}
        locations={[0.0, 0.9]}
        style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <SearchContainer>
          <PageTitle>SEARCH</PageTitle>
          <InputContainer>
            <SearchIcon />
            <SearchInput
              onChangeText={(text) => setQuery(text)}
              value={query}
              autoFocus={true}
            />
            <ClearSearchContainer>
              {query.length > 0 && (
                <ClearSearchButton
                  onPress={() => {
                    setQuery('')
                  }}>
                  <ClearSearchIcon />
                </ClearSearchButton>
              )}
            </ClearSearchContainer>
          </InputContainer>
        </SearchContainer>
        {query.length <= 2 && (
          <DefaultMessageText style={{ paddingTop: '10%' }}>
            Enter a Presenter, Category, or keyword above!
          </DefaultMessageText>
        )}
        <SearchResultsScroll>
          <SearchResultsContainer>
            {searchResults.map((searchResult) => (
              <SearchResult
                key={searchResult.id}
                searchResult={searchResult}
                onPress={() =>
                  navigation.navigate(searchResult.type, searchResult)
                }
              />
            ))}
          </SearchResultsContainer>
        </SearchResultsScroll>
      </LinearGradient>
    </Container>
  )
}
