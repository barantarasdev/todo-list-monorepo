/* eslint-disable react-hooks/exhaustive-deps */

import { FormEvent, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { createTodoCreator } from '@/store/slices/boardsSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import useInput from '@/hooks/useInput'
import { UseColumnProps } from '@/components/Column/types'

function useColumn({ columnId, boardId }: UseColumnProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const { value: todoValue, onChange, onClear } = useInput({ inputRef })

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (todoValue.length) {
        dispatch(createTodoCreator({ todoValue, columnId, boardId, router }))
      }

      onClear()
    },
    [todoValue, dispatch, columnId, onClear, boardId]
  )

  return { onSubmit, inputRef, value: todoValue, onChange, onClear }
}

export default useColumn
