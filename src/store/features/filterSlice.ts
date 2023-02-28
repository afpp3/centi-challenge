import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type FilterState = {
  value: {
    section: string
    window: string
    sort: string
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
    changeSection: (state, action: PayloadAction<string>) => {
      state.value.section = action.payload
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.value.sort = action.payload
    },
    changeWindow: (state, action: PayloadAction<string>) => {
      state.value.window = action.payload
    }
  }
})

export const { changeSection, changeSort, changeWindow } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterSlice.reducer
