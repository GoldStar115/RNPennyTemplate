import * as React from 'react'
import {
  ContainerScroll,
  CategoryListContainer,
  WhiteSectionTitle,
  PrimaryButton,
  PrimaryButtonText,
  WhiteBackButton,
} from '@styles'
import { NavigationParamList } from '@navigation'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { getAlbumsForCategory, getItemFollowed } from '@selectors'
import { Categories } from '@types'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  SettingsContainer,
  GradientOverlay,
  CategoryTextContainer,
  PresenterCoverBackground,
  FeatureTitle,
  FeatureText,
  AlbumsContainer,
  ItemsRow,
} from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { AlbumTile, CategoryBar } from '@components'
import { useShowAuthModal } from '@hooks'
import { toggleFollowing } from '@firestore'

export const CategoryScreen = () => {
  const route = useRoute<RouteProp<NavigationParamList, 'Category'>>()
  const category = Categories[route.params.id]
  const Comp = category?.icon
  const albums = useSelector(getAlbumsForCategory(category))
  const navigation = useNavigation()
  const showAuthModal = useShowAuthModal()
  const isFollowing = useSelector(getItemFollowed(category.id))
  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }}>
      <CategoryListContainer>
        <ItemsRow>
          <WhiteBackButton onPress={navigation.goBack}>
            <Icon name="arrow-back" color="#fff" size={32} />
          </WhiteBackButton>
          <SettingsContainer
            onPress={() =>
              showAuthModal({ lastEventBeforeLogin: 'category.settings' })
            }>
            <Icon name="person-circle" size={28} color="#fff" />
          </SettingsContainer>
        </ItemsRow>
        <CategoryBar activeCategory={category} />
      </CategoryListContainer>
      <GradientOverlay>
        <PresenterCoverBackground source={category.backgroundPicture}>
          <LinearGradient
            colors={[
              'rgba(	0, 0, 0, 0)',
              'rgba(0, 0, 0, .6)',
              'rgba(0, 0, 0, 1)',
            ]}
            locations={[0.0, 0.8, 0.9]}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}></LinearGradient>
          <CategoryTextContainer>
            {Comp && <Comp style={{ color: 'white' }} />}
            <FeatureTitle>{category.label}</FeatureTitle>
            <FeatureText>{category.description}</FeatureText>
            <PrimaryButton
              onPress={() => toggleFollowing(category.id, 'category')}>
              <PrimaryButtonText>
                {isFollowing ? 'Unfollow' : 'Follow'} Category
              </PrimaryButtonText>
            </PrimaryButton>
          </CategoryTextContainer>
        </PresenterCoverBackground>
      </GradientOverlay>

      <AlbumsContainer>
        <WhiteSectionTitle style={{ marginBottom: '5%' }}>
          Browse {category.label}
        </WhiteSectionTitle>
        <ItemsRow>
          {albums.map((album) => (
            <AlbumTile
              key={album.id}
              album={album}
              onPress={() => navigation.navigate('Album', { id: album.id })}
            />
          ))}
        </ItemsRow>
      </AlbumsContainer>
    </ContainerScroll>
  )
}
