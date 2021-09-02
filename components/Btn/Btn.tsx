import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ButtonBase, ButtonText } from './styles'

export const Btn = ({
  onPress,
  primary,
  caption,
  disabled,
  loading,
  style,
}: {
  onPress(): void
  primary?: boolean
  caption: string
  disabled?: boolean
  loading?: boolean
  style?: object
}) => (
  <ButtonBase
    onPress={onPress}
    primary={primary}
    disabled={disabled}
    style={style}>
    {!!loading && <ActivityIndicator color={'black'} size={34} />}
    {!loading && <ButtonText disabled={disabled}>{caption}</ButtonText>}
  </ButtonBase>
)
