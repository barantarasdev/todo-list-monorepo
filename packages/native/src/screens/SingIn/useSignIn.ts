import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

import { useAppDispatch } from '../../hooks/useRedux'
import { SignInCreator } from '../../store/slices/boardsSlice/boardsActionCreator'
import { RootParamList, SignInT } from '../../types/types'

function useSignIn() {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NavigationProp<RootParamList>>()

  const onSubmit = useCallback(
    ({ userEmail, userPassword }: SignInT) => {
      const isAvailable = userEmail && userPassword

      if (isAvailable) {
        dispatch(SignInCreator({ userEmail, userPassword, navigation }))
      }
    },
    [dispatch]
  )

  return { onSubmit }
}

export default useSignIn
