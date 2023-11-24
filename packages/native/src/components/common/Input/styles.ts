import { StyleSheet } from 'react-native'

import { COLORS } from '../../../constants/colors'
import { BORDER_RADIUS } from '../../../constants/styles'

export const INPUT_PADDING = 10

export const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 80,
    fontSize: 19,
    paddingRight: INPUT_PADDING,
    paddingLeft: INPUT_PADDING,
    borderWidth: 1,
    borderColor: COLORS.light,
    borderRadius: BORDER_RADIUS,
    color: COLORS.textPrimary,
  },
})
