import { Colors } from '@styles'
import styled from 'styled-components/native'

interface iButtonBaseProps {
  primary: boolean
  disabled: boolean
}

export const ButtonBase = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.85,
}))<iButtonBaseProps>`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3%;
  color: white;
  background-color: ${({ primary }) => (primary ? Colors.mint : 'white')};
  border-radius: 25px;
  width: 80%;
  margin: 5% auto;
`

export const ButtonText = styled.Text<{ disabled?: boolean }>`
  color: #000;
  font-size: 24px;
  font-family: NoyhGeometric-Bold;
  align-self: center;
  padding-top: 6px;
  ${({ disabled }) => (disabled ? 'opacity: 0.6 ;' : '')};
`
