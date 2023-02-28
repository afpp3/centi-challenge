import { ChangeEvent } from 'react'
import { ImageWrapper } from '../components/ImageWrapper'
import { VideoWrapper } from '../components/VideoWrapper'
import {
  changeSection,
  changeSort,
  changeWindow,
  selectFilter
} from '../store/features/filterSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useGallery } from './queries'
import { Select } from './select'

export function Home() {
  const gallery = useGallery()

  const filters = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  function handleChangeFilters(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    const selectType = e.target.name

    if (selectType === 'section') {
      dispatch(changeSection(value))
    }

    if (selectType === 'sort') {
      dispatch(changeSort(value))
    }

    if (selectType === 'window') {
      dispatch(changeWindow(value))
    }
  }

  if (gallery.isLoading) return <div>Carregando</div>
  console.log(gallery.data)

  return (
    <div className="p-8">
      <div className="rounded-lg flex gap-6 p-2 top-3 w-full bg-white z-10">
        <Select
          name="section"
          id="section"
          onChange={handleChangeFilters}
          defaultValue={filters.section}
          options={[
            { value: 'hot', label: 'Hot' },
            { value: 'top', label: 'Top' },
            { value: 'user', label: 'User' }
          ]}
        />

        <Select
          name="window"
          id="window"
          defaultValue={filters.window}
          onChange={handleChangeFilters}
          options={[
            { value: 'day', label: 'Day' },
            { value: 'week', label: 'Week' },
            { value: 'month', label: 'Month' },
            { value: 'year', label: 'Year' },
            { value: 'all', label: 'All' }
          ]}
        />

        <Select
          name="sort"
          id="sort"
          defaultValue={filters.sort}
          onChange={handleChangeFilters}
          options={[
            { value: 'viral', label: 'Viral' },
            { value: 'topk', label: 'Top' },
            { value: 'time', label: 'Time' },
            { value: 'rising', label: 'Rising' }
          ]}
        />
      </div>
      <div className="mt-8 relative  grid grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        {gallery?.data?.map((item) =>
          item?.images?.map((image) =>
            image.type.includes('image') ? (
              <ImageWrapper key={image.id} image={image} />
            ) : (
              <VideoWrapper key={image.id} image={image} />
            )
          )
        )}
      </div>
    </div>
  )
}
