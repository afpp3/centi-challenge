import { useQuery } from '@tanstack/react-query'
import { api } from '../services/http-common'
import { FilterState, selectFilter } from '../store/features/filterSlice'
import { useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'

export type Image = {
  id: string
  title: null
  description: string
  datetime: number
  type: string
  animated: boolean
  width: number
  height: number
  size: number
  views: number
  bandwidth: number
  vote: null
  favorite: boolean
  nsfw: null
  section: null
  account_url: null
  account_id: null
  is_ad: boolean
  in_most_viral: boolean
  has_sound: boolean
  tags: []
  ad_type: number
  ad_url: string
  edited: string
  in_gallery: boolean
  link: string
  comment_count: null
  favorite_count: null
  ups: null
  downs: null
  points: null
  score: null
}

type Gallery = {
  id: string
  title: string
  description: null
  images: Image[]
}

type Filters = {
  section: string
  window: string
  sort: string
}

const fetchGallery = async ({
  section,
  sort,
  window
}: Filters): Promise<Gallery[]> => {
  const url = `/gallery/${section}/${sort}/${window}`

  const response = await api.get(url)

  return response.data.data as Gallery[]
}

export const useGallery = () => {
  const filters = useAppSelector(selectFilter)

  return useQuery({
    queryKey: ['gallery', filters],
    queryFn: () => fetchGallery(filters)
  })
}
