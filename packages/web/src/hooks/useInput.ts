import { ChangeEvent, useCallback, useState } from 'react'
import { UseInputProps } from '@/types'

function useInput({ valueProp = '', inputRef = null }: UseInputProps) {
  const [value, setValue] = useState(valueProp)

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const onClear = useCallback(() => {
    setValue('')
    inputRef?.current?.focus()
  }, [setValue, inputRef])

  return { value, onChange, onClear }
}

export default useInput
