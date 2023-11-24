import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles as BoardStyles } from './styles'
import { BoardProps } from './types'
import useBoard from './useBoard'
import { styles } from '../../styles'

function Board({ board: { boardName, boardId } }: BoardProps) {
  const { onClick } = useBoard(boardId)

  return (
    <TouchableOpacity style={BoardStyles.board} onPress={onClick}>
      <Text style={styles.cardText}>{boardName}</Text>
    </TouchableOpacity>
  )
}

export default Board
