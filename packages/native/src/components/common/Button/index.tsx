import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { ButtonProps } from './types'

function Button({ text, onClick }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
