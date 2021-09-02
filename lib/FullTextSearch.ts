import { Index } from 'flexsearch'
import { iPresenter, iAlbum, iTrack } from '@types'
const FlexSearch = require('flexsearch/flexsearch.js')

export interface iSearchResult {
  id: string
  title: string
  image: string
  type: string
}

interface FullTextSearchProps {
  presenters: iPresenter[]
  albums: iAlbum[]
  tracks: iTrack[]
}

export class FullTextSearch {
  _index: Index<any>

  constructor(props: FullTextSearchProps) {
    this.buildIndex(props)
  }

  buildIndex({ presenters, albums, tracks }: FullTextSearchProps) {
    this._index = new FlexSearch({
      encode: 'advanced',
      doc: {
        id: 'idx',
        field: ['title', 'description'],
      },
    })

    let index = 0
    // index presenters
    this._index.add(
      presenters.map((presenter) => {
        return {
          id: presenter.id,
          idx: ++index,
          title: `${presenter.firstName} ${presenter.lastName}`,
          description: presenter.bio,
          type: 'Presenter',
          image: presenter.profilePicture?.src,
        }
      }),
    )
    // index albums
    this._index.add(
      albums.map((album) => {
        return {
          id: album.id,
          idx: ++index,
          title: album.title,
          description: album.description,
          type: 'Album',
          image: album.coverPicture?.src,
        }
      }),
    )
  }

  search(query: string) {
    if (!this._index) {
      throw new Error('search index is null')
    }
    const results = this._index.search(query)
    return results
  }
}
