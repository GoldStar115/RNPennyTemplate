import styled from 'styled-components/native'
import { Colors, WhiteSectionTitle } from '@styles'
import { ResponsiveImage } from '@components'

export const TouchableContainer = styled.TouchableOpacity`
  padding: 5px;
  width: 100%;
  height: 80px;
`

export const Container = styled.View`
  width: 85%;
  flex-direction: row;
  padding: 5%;
`

export const TextContainer = styled.View``

export const Type = styled.Text`
  color: ${Colors.mint};
`
export const ResultTitle = styled(WhiteSectionTitle)`
  font-size: 20px;
  flex-wrap: wrap;
`
export const Image = styled(ResponsiveImage)`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`
