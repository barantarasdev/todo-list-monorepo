import { Text, View } from 'react-native'

import { ColumnProps } from './types'
import { styles } from '../../styles'
import Todos from '../Todos'

function Column({ column: { columnName, todos } }: ColumnProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{columnName}</Text>

      <Todos todos={todos} />
    </View>
  )
}

export default Column
