import { getData, storeData } from 'core/utils/asyncStorage'
import { UserStorageT } from 'core/utils/types'

import { SendRequestProps } from './types'
import { MethodsE } from '../types/enum'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL

async function sendRequest<T>({
  url,
  method = MethodsE.GET,
  data = null,
  isVerify = true,
  count = 0,
}: SendRequestProps): Promise<T | undefined> {
  const headers: Record<string, string> = {}
  const options: RequestInit = { method }

  if (data) {
    headers['Content-Type'] = 'application/json'
    options.body = JSON.stringify(data)
  }

  if (isVerify) {
    const { accessToken } = await getData<UserStorageT>('accessToken')

    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch(BASE_URL + url, {
    ...options,
    headers,
  })

  if (response.status === 401) {
    if (count > 5) {
      throw new Error('Bar request!')
    }

    const { refreshToken: expiredRefreshToken } =
      await getData<UserStorageT>('refreshToken')
    const refreshResponse = await fetch(`${BASE_URL}/auth/refresh`, {
      method: MethodsE.GET,
      headers: {
        Authorization: `Bearer ${expiredRefreshToken}`,
      },
    })
    const { accessToken, refreshToken } = await refreshResponse.json()

    if (refreshResponse.ok) {
      await storeData('accessToken', { accessToken })
      await storeData('refreshToken', { refreshToken })

      return sendRequest({
        url,
        method,
        data,
        isVerify,
        count: count + 1,
      })
    }

    throw new Error('Not authorized')
  }

  if (!response.ok) {
    throw new Error('Error')
  }

  return response.json()
}

export default sendRequest
