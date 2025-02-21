import { env } from '@/utils/env'
import trans from 'translate'

export async function translate(text: string) {

  trans.engine = 'deepl'
  trans.key = env.DEEPL_API_KEY

  return await trans(text, 'pt')
}

