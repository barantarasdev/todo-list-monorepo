import {
  NavigationProp,
  useNavigation as useReactNavigation,
} from '@react-navigation/native'
import { getData } from 'core/utils/asyncStorage'
import { useEffect } from 'react'

import { useAppDispatch } from '../hooks/useRedux'
import { setBoardsCreator } from '../store/slices/boardsSlice/boardsActionCreator'
import { RootParamList } from '../types/types'

function useNavigation() {
  const dispatch = useAppDispatch()
  const navigation = useReactNavigation<NavigationProp<RootParamList>>()

  useEffect(() => {
    async function fetchUser() {
      const userName = await getData('userName')

      if (!userName) {
        navigation.navigate('SignIn')
      } else {
        dispatch(setBoardsCreator())
      }
    }

    fetchUser()
  }, [])
}

export default useNavigation
