import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

import { useAppSelector } from '../../hooks/useRedux'

function useBoard() {
  const { columns } = useAppSelector(state => state.boards)
  const navigation = useNavigation()

  const onClick = useCallback(() => {
    navigation.goBack()
  }, [])

  return { columns, onClick }
}

export default useBoard
