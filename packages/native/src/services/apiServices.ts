import client from './apiClient'
import { SignInT } from '../types/types'

export const getBoards = () => client.get({ url: '/boards' })

export const getColumns = (boardId: string) =>
  client.get({ url: `/boards/${boardId}/columns` })

export const signIn = (data: SignInT) =>
  client.post({
    url: '/auth/signIn',
    isVerify: false,
    data,
  })
