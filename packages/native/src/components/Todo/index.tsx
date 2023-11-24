import { Text, View } from 'react-native'

import { styles } from './styles'
import { TodoProps } from './types'

function Todo({ todo: { todoValue, todoCompleted } }: TodoProps) {
  return (
    <View style={styles.todo}>
      <Text
        ellipsizeMode="tail"
        style={{
          ...styles.todoText,
          textDecorationLine: todoCompleted ? 'line-through' : 'none',
        }}
      >
        {todoValue}
      </Text>
    </View>
  )
}

export default Todo
