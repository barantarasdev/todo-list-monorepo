import { ReactNode } from 'react'
import { ImageBackground } from 'react-native'

import { styles } from './styles'
import Modal from '../Modal'

function Container({ children }: { children: ReactNode }) {
  return (
    <ImageBackground
      source={require('../../../assets/bg.jpg')}
      style={styles.backgroundImage}
    >
      {children}

      <Modal />
    </ImageBackground>
  )
}

export default Container
