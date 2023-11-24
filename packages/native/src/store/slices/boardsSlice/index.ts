import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'
import { BoardsStateT } from './types'
import { BoardT, ColumnT } from '../../../types/types'

const reducers = {
  setColumns: (state: BoardsStateT, action: PayloadAction<ColumnT[]>) => ({
    ...state,
    columns: action.payload,
  }),
  setBoards: (state: BoardsStateT, action: PayloadAction<BoardT[]>) => ({
    ...state,
    boards: action.payload,
  }),
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers,
})

export const { setColumns, setBoards } = boardsSlice.actions

export default boardsSlice.reducer
