import { FullTextSearch } from '@lib'
import { useSelector } from 'react-redux'
import { getPresenters, getTracks, getDiscoverAlbums } from '@selectors'

export const useFullTextSearch = () => {
  const presenters = useSelector(getPresenters())
  const albums = useSelector(getDiscoverAlbums())
  const tracks = useSelector(getTracks())
  const fullTextSearch = new FullTextSearch({ presenters, albums, tracks })
  return (query: string) => fullTextSearch.search(query)
}
