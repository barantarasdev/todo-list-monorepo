import {
  BoardsCreators,
  SetColumnsCreatorProps,
  SetSignInCreatorProps,
} from './types'

export const SignInCreator = ({
  userEmail,
  userPassword,
  navigation,
}: SetSignInCreatorProps) => ({
  type: BoardsCreators.ASYNC_SIGN_IN,
  payload: { navigation, userEmail, userPassword },
})

export const setColumnsCreator = ({
  boardId,
  navigation,
}: SetColumnsCreatorProps) => ({
  type: BoardsCreators.ASYNC_SET_COLUMNS,
  payload: { boardId, navigation },
})

export const setBoardsCreator = () => ({
  type: BoardsCreators.ASYNC_SET_BOARDS,
  payload: {},
})
