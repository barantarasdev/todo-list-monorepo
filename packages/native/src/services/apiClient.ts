import sendRequest from './apiCall'
import { SendRequestProps } from './types'
import { MethodsE } from '../types/enum'

const { POST } = MethodsE

const client = {
  get: <T>(props: SendRequestProps) => sendRequest<T>(props),
  post: <T>(props: SendRequestProps) =>
    sendRequest<T>({ ...props, method: POST }),
}

export default client
