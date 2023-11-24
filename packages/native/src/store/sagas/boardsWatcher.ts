/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit'
import UserStorage from 'core/utils/userStorege'
import { call, put, takeEvery } from 'redux-saga/effects'

import { getBoards, getColumns, signIn } from '../../services/apiServices'
import { BoardT, ColumnT } from '../../types/types'
import { setBoards, setColumns } from '../slices/boardsSlice'
import { setBoardsCreator } from '../slices/boardsSlice/boardsActionCreator'
import {
  BoardsCreators,
  SetColumnsCreatorProps,
  SetSignInCreatorProps,
} from '../slices/boardsSlice/types'
import { setSnackbar } from '../slices/snackbarSlice'

function* setBoardsWorker() {
  const boards: BoardT[] = yield call(getBoards)

  yield put(setBoards(boards))
}

function* setColumnsWorker(action: PayloadAction<SetColumnsCreatorProps>) {
  const { navigation, boardId } = action.payload

  const columns: ColumnT[] = yield call(getColumns, boardId)

  yield put(setColumns(columns))

  navigation.navigate('Columns')
}

function* setSignInWorker(action: PayloadAction<SetSignInCreatorProps>) {
  const { userEmail, userPassword, navigation } = action.payload

  try {
    const { userName, accessToken, refreshToken } = yield call(signIn, {
      userEmail,
      userPassword,
    })

    yield call(UserStorage, { userName, accessToken, refreshToken })
    yield put(setBoardsCreator())

    navigation.navigate('Home')
  } catch (error) {
    yield put(setSnackbar('User not found!'))
  }
}

function* boardsWatcher() {
  yield takeEvery(BoardsCreators.ASYNC_SET_BOARDS, setBoardsWorker)
  yield takeEvery(BoardsCreators.ASYNC_SET_COLUMNS, setColumnsWorker)
  yield takeEvery(BoardsCreators.ASYNC_SIGN_IN, setSignInWorker)
}

export default boardsWatcher
