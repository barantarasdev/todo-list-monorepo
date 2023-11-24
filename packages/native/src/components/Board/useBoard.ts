import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

import { useAppDispatch } from '../../hooks/useRedux'
import { setColumnsCreator } from '../../store/slices/boardsSlice/boardsActionCreator'
import { RootParamList } from '../../types/types'

function useBoard(boardId: string) {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootParamList>>()

  const onClick = useCallback(() => {
    dispatch(setColumnsCreator({ boardId, navigation }))
  }, [dispatch, boardId])

  return { onClick }
}

export default useBoard
