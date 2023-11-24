import { MethodsE } from '../types/enum'

export type SendRequestProps = {
  url: string
  method?: MethodsE
  data?: unknown
  isVerify?: boolean
  count?: number
}
