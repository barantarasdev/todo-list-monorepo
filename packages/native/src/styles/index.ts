import { StyleSheet } from 'react-native'

import { COLORS } from '../constants/colors'
import { BORDER_RADIUS, STATUS_BAR_HEIGHT } from '../constants/styles'

export const CONTAINER_PADDING = 10

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CONTAINER_PADDING,
    paddingTop: STATUS_BAR_HEIGHT + CONTAINER_PADDING * 2,
  },
  scrollView: {
    flexGrow: 1,
  },
  cards: {
    padding: 20,
  },
  card: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.light,
    borderRadius: BORDER_RADIUS,
  },
  cardText: {
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
})
