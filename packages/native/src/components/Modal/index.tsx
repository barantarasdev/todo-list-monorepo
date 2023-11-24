import { Modal as RNModal, Text, View } from 'react-native'

import { styles } from './styles'
import useModal from './useModal'

function Modal() {
  const { snackbar } = useModal()

  return (
    <RNModal animationType="fade" visible={!!snackbar} transparent>
      <View style={styles.modal}>
        <Text style={styles.modalText}>{snackbar}</Text>
      </View>
    </RNModal>
  )
}

export default Modal
