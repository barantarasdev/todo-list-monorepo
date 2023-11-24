import { Form } from 'react-final-form'
import { Text, View } from 'react-native'

import { styles } from './styles'
import useSignIn from './useSignIn'
import Container from '../../components/Container'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

function SignIn() {
  const { onSubmit } = useSignIn()

  return (
    <Container>
      <View style={styles.container}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <View style={styles.form}>
              <Text style={styles.title}>Sign In</Text>

              <Input placeholder="Email" name="userEmail" type="email" />

              <Input placeholder="Password" name="userPassword" isPassword />

              <Button text="Sign in" onClick={handleSubmit} />
            </View>
          )}
        />
      </View>
    </Container>
  )
}

export default SignIn
