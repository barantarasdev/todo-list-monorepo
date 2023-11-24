import { StyleSheet } from 'react-native'

import { COLORS } from '../../../constants/colors'
import { BORDER_RADIUS } from '../../../constants/styles'

export const BUTTON_PADDING_WIDTH = 25
export const BUTTON_PADDING_HEIGHT = 10

export const styles = StyleSheet.create({
  button: {
    maxWidth: 150,
    paddingTop: BUTTON_PADDING_HEIGHT,
    paddingBottom: BUTTON_PADDING_HEIGHT,
    paddingLeft: BUTTON_PADDING_WIDTH,
    paddingRight: BUTTON_PADDING_WIDTH,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.secondary,
  },
})
