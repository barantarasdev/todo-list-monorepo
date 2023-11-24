import { Field } from 'react-final-form'
import { TextInput } from 'react-native'

import { styles } from './styles'
import { InputProps } from './types'
import { COLORS } from '../../../constants/colors'

function Input({
  placeholder,
  type = 'text',
  isPassword = false,
  name,
}: InputProps) {
  return (
    <Field name={name}>
      {({ input: { value, onChange } }) => (
        <TextInput
          style={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textDisabled}
          inputMode={type}
          secureTextEntry={isPassword}
        />
      )}
    </Field>
  )
}

export default Input
