import { FlatList } from 'react-native-gesture-handler'

import { TodosProps } from './types'
import { styles } from '../../styles'
import Todo from '../Todo'

function Todos({ todos }: TodosProps) {
  return (
    <FlatList
      style={styles.cards}
      data={todos}
      renderItem={({ item }) => <Todo todo={item} />}
      keyExtractor={item => item.todoId}
    />
  )
}

export default Todos
