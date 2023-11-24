import { combineReducers } from '@reduxjs/toolkit'

import boardsSlice from '../slices/boardsSlice'
import snackbarSlice from '../slices/snackbarSlice'

const rootReducer = combineReducers({
  boards: boardsSlice,
  snackbar: snackbarSlice,
})

export default rootReducer
