import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'
import { SnackbarStateT } from './types'

const reducers = {
  setSnackbar: (
    state: SnackbarStateT,
    action: PayloadAction<string | null>
  ) => {
    state.snackbar = action.payload
  },
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers,
})

export const { setSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer
