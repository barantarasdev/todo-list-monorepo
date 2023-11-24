import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { styles } from './styles'
import Board from '../../components/Board'
import Container from '../../components/Container'
import { useAppSelector } from '../../hooks/useRedux'
import { styles as MainStyles } from '../../styles'

function Home() {
  const { boards } = useAppSelector(state => state.boards)

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={MainStyles.cards}
          data={boards}
          renderItem={({ item }) => <Board board={item} />}
          keyExtractor={item => item.boardId}
        />
      </SafeAreaView>
    </Container>
  )
}

export default Home
