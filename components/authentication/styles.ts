import styled from 'styled-components/native'
import {
  ClearContainer,
  WhiteContentTitle,
  GreenPresenterText,
  WhiteBodyText,
} from '@styles'

export const SocialIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin: 3% auto;
  flex: 1;
`
export const GoogleIcon = styled.TouchableOpacity`
  background-color: #fff;
  padding: 5px;
  max-height: 42px;
  width: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`
export const ButtonContainer = styled(ClearContainer)`
  width: 100%;
  justify-content: flex-end;
  bottom: 5%;
`
export const ButtonContainerLogout = styled(ClearContainer)`
  width: 100%;
  justify-content: flex-end;
  bottom: 5%;
`
export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
`
export const LogoutContent = styled.View`
  flex:1;
  width: 100%;
`
export const BackButtonText = styled(GreenPresenterText)`
  font-family: NoyhGeometric-Bold;
  text-align: center;
  margin: 3% auto;
  font-size: 24px;
`
export const BackButton = styled.TouchableOpacity`
  width: 100%;
`

export const SectionTitle = styled(WhiteContentTitle)`
  text-align: center;
  font-size: 30px;
`

export const AuthHeaderGreen = styled(GreenPresenterText)`
  text-align: center;
  font-size: 40px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-wrap: wrap;
  margin: 2% 0;
`

export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 100%;
  font-size: 20px;
  flex-shrink: 1;
  flex-wrap: wrap;
  padding-bottom: 3%;
`

export const LoginContentContainer = styled.View`
  flex: 1;
  width: 90%;
  align-items: center;
  margin-top: 35px;
  justify-content: space-between;
`
export const LogoutContainer = styled.View`
  flex: 1;
  width: 90%;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
`
