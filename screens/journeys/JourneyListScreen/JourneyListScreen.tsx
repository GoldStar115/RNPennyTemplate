import * as React from 'react'
import { ContainerScroll, ItemsRow, WhiteSectionTitle } from '@styles'
import { useNavigation } from '@react-navigation/native'
import { getJourneys } from '@selectors'
import { useSelector } from 'react-redux'
import { JourneysContainer } from './styles'
import { Btn, JourneyTile } from '@components'
import { Linking } from 'react-native'
import { Config, URL_PREMIUM } from '@services'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import auth from '@react-native-firebase/auth'

export const JourneyListScreen = () => {
  const navigation = useNavigation()
  const journeys = useSelector(getJourneys())
  const [token, setToken] = useState<string | null>()
  const user = auth().currentUser

  const axiosInstance = useMemo(() => {
    const headers: any = {}
    if (!!token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    const api = axios.create({
      baseURL: Config.external.apiUrl,
      headers,
    })

    return api
  }, [token])

  useEffect(() => {
    if (user) {
      user.getIdToken(true).then((accessToken) => {
        setToken(accessToken)
      })
    } else {
      setToken(null)
    }
  }, [])

  const openPremiumLink = async () => {
    try {
      const { token } = (await axiosInstance.get('stripe/generate-token')).data
      const url = `${URL_PREMIUM}?authToken=${token}`
      Linking.openURL(`${URL_PREMIUM}?authToken=${token}`)
    } catch (exception) {
      console.log('getting token failed with', { exception })
    }
  }

  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }}>
      <JourneysContainer>
        <WhiteSectionTitle>Journeys</WhiteSectionTitle>
        <ItemsRow>
          {journeys.map((journey) => (
            <JourneyTile
              key={journey.id}
              journey={journey}
              onPress={() => navigation.navigate('Journey', { id: journey.id })}
            />
          ))}
        </ItemsRow>
        <Btn onPress={() => openPremiumLink()} primary caption="Upgrade" />
      </JourneysContainer>
    </ContainerScroll>
  )
}
