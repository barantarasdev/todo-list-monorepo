import { StyleSheet } from 'react-native'

import { COLORS } from '../../constants/colors'
import { BORDER_RADIUS } from '../../constants/styles'

export const styles = StyleSheet.create({
  board: {
    padding: 40,
    marginBottom: 20,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
  },
})
