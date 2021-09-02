import * as React from 'react'
import {
  ContainerScroll,
  CategoryListContainer,
  CategoryFeatureContainer,
  ListContainer,
  ItemsRow,
} from '@styles'
import { CategoriesArray, iPresenter } from '@types'
import {
  getPresenters,
  getRecentAlbums,
  getFeaturedAlbums,
  getLocalStorageLoaded,
} from '@selectors'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  FeatureCarousel,
  TileCarousel,
  AlbumListItem,
  CategoryBar,
} from '@components'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  CarouselContainer,
  PresenterTiles,
  CategoryTiles,
  Title,
  SettingsContainer,
  PageTitle,
} from './styles'

import { PresenterTile } from './PresenterTile'
import { CategoryTile } from './CategoryTile'
import { FeaturedAlbumSlide } from './FeatureSlides/FeaturedAlbumSlide'
import { useShowAuthModal } from '@hooks'
import { useEffect } from 'react'
import { StartupService } from '@services'

const CategoryList = () => {
  const showAuthModal = useShowAuthModal()
  return (
    <CategoryListContainer>
      <ItemsRow>
        <PageTitle>Explore </PageTitle>
        <SettingsContainer
          onPress={() =>
            showAuthModal({ lastEventBeforeLogin: 'discover.settings' })
          }>
          <Icon name="person-circle" size={28} color="#fff" />
        </SettingsContainer>
      </ItemsRow>
      <CategoryBar />
    </CategoryListContainer>
  )
}

export const DiscoverScreen = () => {
  const navigation = useNavigation()
  const presenters: iPresenter[] = useSelector(getPresenters())
  const recentAlbums = useSelector(getRecentAlbums())
  const featuredAlbums = useSelector(getFeaturedAlbums())
  const localStorageLoaded = useSelector(getLocalStorageLoaded())
  useEffect(() => {
    if (localStorageLoaded) {
      StartupService.onStartUp(navigation)
    }
  }, [localStorageLoaded, navigation])

  return (
    <ContainerScroll contentContainerStyle={{ flexGrow: 1 }}>
      <CategoryFeatureContainer>
        <CarouselContainer>
          <CategoryList />
          {featuredAlbums && (
            <FeatureCarousel>
              {featuredAlbums?.map((album) => (
                <FeaturedAlbumSlide key={album.id} album={album} />
              ))}
            </FeatureCarousel>
          )}
        </CarouselContainer>
      </CategoryFeatureContainer>

      <PresenterTiles>
        <Title>New Presenters</Title>
        <TileCarousel loops={2}>
          {presenters.map((presenter) => (
            <PresenterTile
              key={presenter.id}
              presenter={presenter}
              onPress={() =>
                navigation.navigate('Presenter', {
                  id: presenter.id,
                })
              }
            />
          ))}
        </TileCarousel>
      </PresenterTiles>

      <CategoryTiles>
        <Title>Categories</Title>
        <TileCarousel>
          {CategoriesArray.map((category) => (
            <CategoryTile
              key={category.id}
              category={category}
              onPress={() =>
                navigation.navigate('Category', {
                  id: category.id,
                })
              }
            />
          ))}
        </TileCarousel>
      </CategoryTiles>

      <Title>New Albums</Title>
      <ListContainer>
        {recentAlbums.map((album) => (
          <AlbumListItem key={album.id} album={album} />
        ))}
      </ListContainer>
    </ContainerScroll>
  )
}
