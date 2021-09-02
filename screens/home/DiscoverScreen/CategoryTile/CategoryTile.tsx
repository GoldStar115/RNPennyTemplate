import * as React from 'react'
import { Tile } from '@components'
import { iCategory } from '@types'
import { Contents, LabelText } from './styles'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  category: iCategory
  onPress: Function
}

export const CategoryTile = ({ category, onPress }: Props) => {
  const Comp = category?.icon
  return (
    <Tile
      backgroundSource={category.backgroundPicture}
      backgroundColor={category.color}
      onPress={onPress}
      marginLeft={20}>
      <LinearGradient
        colors={['rgba(	0, 0, 0, 0)', 'rgba(0, 0, 0, .9)']}
        style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Contents>
          {Comp && <Comp style={{ color: 'white' }} />}
          <LabelText>{category.label}</LabelText>
        </Contents>
      </LinearGradient>
    </Tile>
  )
}
