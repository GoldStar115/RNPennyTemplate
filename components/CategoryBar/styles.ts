import styled from 'styled-components/native'
import { Colors } from '@styles'

interface CategoryListEntryProps {
  active?: boolean
}

export const CategoryListEntry = styled.TouchableOpacity<
  CategoryListEntryProps
>`
  display: flex;
  justify-content: center;
  padding: 0 20px 0;
  border-bottom-width: 5px;
  border-bottom-color: ${({ active }) =>
    active ? Colors.mint : 'transparent'};
`

export const CategoryNavText = styled.Text`
  color: white;
  font-size: 20px;
  font-family: NoyhGeometric-Regular;
  padding: 0;
`

export const SettingsContainer = styled.TouchableOpacity`
  padding: 5% 5% 0 5%;
  position: absolute;
  right: 5%;
  box-shadow: 1px 1px 3px ${Colors.darkGray};
`
