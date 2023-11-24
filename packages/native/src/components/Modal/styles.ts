import { StyleSheet } from 'react-native'

import { COLORS } from '../../constants/colors'
import { BORDER_RADIUS } from '../../constants/styles'

export const styles = StyleSheet.create({
  modal: {
    padding: 20,
    position: 'absolute',
    top: 100,
    right: 10,
    backgroundColor: 'red',
    borderRadius: BORDER_RADIUS,
  },
  modalText: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.textPrimary,
  },
})
