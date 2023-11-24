import { StyleSheet } from 'react-native'

import { COLORS } from '../../constants/colors'
import { BORDER_RADIUS } from '../../constants/styles'

export const styles = StyleSheet.create({
  todo: {
    padding: 20,
    marginBottom: 20,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.primary,
  },
  todoText: {
    fontSize: 20,
    fontWeight: '700',
  },
})
