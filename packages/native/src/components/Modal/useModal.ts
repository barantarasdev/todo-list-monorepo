import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { setSnackbar } from '../../store/slices/snackbarSlice'

function useModal() {
  const dispatch = useAppDispatch()
  const { snackbar } = useAppSelector(state => state.snackbar)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (snackbar) {
      timer = setTimeout(() => {
        dispatch(setSnackbar(null))
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [snackbar])

  return { snackbar }
}

export default useModal
