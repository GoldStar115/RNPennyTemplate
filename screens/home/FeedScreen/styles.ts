import styled from 'styled-components/native'
import {
  WhiteSectionTitle,
  WhiteBodyText,
  PageHeader,
  Colors,
  GreenPresenterText,
} from '@styles'

interface activeFeedTabProps {
  active?: boolean
}

export const FeedTitle = styled(WhiteSectionTitle)`
  text-align: center;
  width: 100%;
  font-size: 24px;
`

export const TabText = styled(PageHeader)`
  text-align: center;
  width: 100%;
  font-size: 20px;
  text-transform: uppercase;
`
export const Text = styled(WhiteBodyText)`
  text-align: center;
  width: 75%;
  font-size: 16px;
`
export const FeedContainer = styled.View`
  padding: 5% 5% 0% 5%;
  height: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${Colors.mint};
  box-shadow: 1px 1px 3px ${Colors.darkGray};
`
export const FeedTabs = styled.View`
  flex: 0.07;
  flex-wrap: wrap;
  flex-grow: 0.07;
  flex-direction: row;
  width: 100%;
  background-color: ${Colors.mint};
  box-shadow: 0px 1px -8px ${Colors.darkGray};
`
export const TabContainer = styled.View<activeFeedTabProps>`
  border-bottom-width: 5px;
  border-bottom-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  height: 35px;
  flex: 1;
`
export const FeedTab = styled.TouchableOpacity`
  flex: 1;
`

export const PageTitle = styled(PageHeader)`
  text-align: center;
  font-size: 40px;
  margin-top: 2%;
`

export const FeedPlayButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4%;
  color: black;
  background-color: white;
  border-radius: 25px;
  width: 30%;
  margin: 4% auto;
`
export const DefaultFeedCTA = styled(GreenPresenterText)`
  font-size: 24px;
  text-align: center;
  padding-top: 4%;
`
