import styled from 'styled-components/native'
import { WhiteSectionTitle, WhiteBodyText, Colors } from '@styles'

export const PageTitle = styled(WhiteSectionTitle)`
  text-align: left;
  width: 100%;
  color: #000;
  font-size: 40px;
  padding-left: 4%;
  margin-top: 2%;
`
export const SectionTitle = styled(WhiteSectionTitle)`
  text-align: left;
  font-size: 28px;
`

export const CloseContainer = styled.TouchableOpacity`
  padding: 5% 5% 0 5%;
  position: absolute;
  right: 8%;
  top: 30%;
`
export const Text = styled(WhiteBodyText)`
  text-align: left;
  width: 75%;
  font-size: 16px;
`
export const SettingsContainer = styled.View`
  margin-top: 0;
  padding: 15% 5% 0% 15%;
  flex: 0.15;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: ${Colors.mint};
`

export const SettingsInfoContainer = styled.View`
  margin-top: 0;
  padding: 5%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
