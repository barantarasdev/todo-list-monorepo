import { FlatList, SafeAreaView } from 'react-native'

import useBoard from './useBoard'
import Column from '../../components/Column'
import Container from '../../components/Container'
import Button from '../../components/common/Button'
import { styles } from '../../styles'

function BoardScreen() {
  const { onClick, columns } = useBoard()

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <Button text="Back" onClick={onClick} />

        <FlatList
          style={styles.cards}
          data={columns}
          renderItem={({ item }) => <Column column={item} />}
          keyExtractor={item => item.columnId}
        />
      </SafeAreaView>
    </Container>
  )
}

export default BoardScreen
