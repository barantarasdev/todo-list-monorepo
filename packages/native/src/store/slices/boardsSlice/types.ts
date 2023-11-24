import { NavigationProp } from '@react-navigation/native'

import { BoardT, ColumnT, RootParamList, SignInT } from '../../../types/types'

export type BoardsStateT = {
  columns: ColumnT[]
  boards: BoardT[]
}

export type SetColumnsCreatorProps = {
  boardId: string
  navigation: NavigationProp<RootParamList>
}

export type SetSignInCreatorProps = {
  navigation: NavigationProp<RootParamList>
} & SignInT

export enum BoardsCreators {
  ASYNC_SET_COLUMNS = 'ASYNC_SET_COLUMNS',
  ASYNC_SET_BOARDS = 'ASYNC_SET_BOARDS',
  ASYNC_SIGN_IN = 'ASYNC_SIGN_IN',
}
