import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type SectionType = 'hot' | 'top' | 'user'
export type WindowType = 'day' | 'week' | 'month' | 'year' | 'all'
export type SortType = 'viral' | 'top' | 'time' | 'rising'

export type FilterState = {
  value: {
    section: SectionType
    window: WindowType
    sort: SortType
  }
}

const initialState: FilterState = {
  value: {
    section: 'hot',
    sort: 'viral',
    window: 'day'
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSection: (state, action: PayloadAction<SectionType>) => {
      state.value.section = action.payload
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.value.sort = action.payload
    },
    changeWindow: (state, action: PayloadAction<WindowType>) => {
      state.value.window = action.payload
    }
  }
})

export const { changeSection, changeSort, changeWindow } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterSlice.reducer
