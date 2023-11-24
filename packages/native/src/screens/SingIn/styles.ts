import { StyleSheet } from 'react-native'

import { COLORS } from '../../constants/colors'

export const CONTAINER_PADDING = 10

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  form: {
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
