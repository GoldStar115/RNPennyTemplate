import * as React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { iPresenter } from '@types'
import { Name, Handle, Contents, PresenterID, TextContainer } from './styles'
import { Tile } from '@components'

interface Props {
  presenter: iPresenter
  onPress: Function
}

export const PresenterTile = ({ presenter, onPress }: Props) => (
  <Tile
    backgroundSource={{ uri: presenter.profilePicture?.src }}
    onPress={onPress}
    height={175}
    marginLeft={20}>
    <LinearGradient
      colors={[
        'rgba(	0, 0, 0, 0)',
        'rgba(0, 0, 0, .9)',
        'rgba(0, 0, 0, 1)',
      ]}
      locations={[0.0, 0.8, 0.9]}
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Contents>
        <TextContainer>
          <Handle>@{presenter.handle}</Handle>
          <Name>
            {presenter.firstName} {presenter.lastName}
          </Name>
          <PresenterID>{presenter.idStatement}</PresenterID>
        </TextContainer>
      </Contents>
    </LinearGradient>
  </Tile>
)
